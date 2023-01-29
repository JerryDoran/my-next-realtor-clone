import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../../firebase.config.js';
import Spinner from '../../../components/global/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaParking,
  FaChair,
  FaShare,
} from 'react-icons/fa';
import Contact from '../../../components/Contact';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function ListingDetails() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [contactLandlord, setContactLandlord] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, 'listings', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: 'progressbar' }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[300px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="fixed top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <FaShare className="text-lg text-slate-500" />
      </div>
      {shareLinkCopied && (
        <p className="fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2">
          Link Copied
        </p>
      )}
      <div className="m-4 p-4 rounded-lg shadow-lg bg-white flex flex-col max-w-7xl lg:mx-auto lg:space-x-8 md:flex-row">
        <div className="w-full">
          <p className="text-xl font-bold mb-3 text-blue-900">
            {listing.name} - $
            {listing.offer
              ? listing.salePrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' ? ' / month' : ''}
          </p>
          <p className="flex items-center mt-6 mb-5 font-semibold">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600 mr-1" />
            {listing.address}
          </p>
          <div className="flex justify-start items-center space-x-4 w-[90%] mb-5">
            <p className="bg-red-800 w-full max-w-[200px] rounded-2xl p-1 text-white text-sm text-center font-semibold shadow-md">
              {listing.type === 'rent' ? 'Rent' : 'Sale'}
            </p>

            {listing.offer && (
              <p className="w-full max-w-[200px] bg-green-800 rounded-2xl p-1 text-white text-sm text-center font-semibold shadow-md">
                $
                {(listing.regularPrice - listing.salePrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                discount
              </p>
            )}
          </div>
          <p className="mt-3 mb-3 text-sm md:max-w-[80%]">
            Description -{' '}
            <span className="font-semibold">{listing.description}</span>
          </p>
          <ul className="flex items-center space-x-4 sm:space-x-5 text-sm font-semibold mb-6 w-[90%]">
            <li className="flex items-center whitespace-nowrap">
              <FaBed className="text-lg mr-1" />
              {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : '1 Bed'}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaBath className="text-lg mr-1" />
              {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : '1 Bath'}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaParking className="text-lg mr-1" />
              {listing.parking ? 'Parking spot' : 'No Parking'}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaChair className="text-lg mr-1" />
              {listing.furnished ? 'Furnished' : 'Not furnished'}
            </li>
          </ul>
          {listing.userRef === auth.currentUser?.uid && !contactLandlord && (
            <div className="mt-6">
              <button
                className="px-7 py-3 bg-black text-white font-medium text-sm uppercase rounded shadow-md transition hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg w-full"
                onClick={() => setContactLandlord(true)}
              >
                Contact Landlord
              </button>
            </div>
          )}
          {contactLandlord && (
            <Contact userRef={listing.userRef} listing={listing} />
          )}
        </div>
        <div className="w-full h-[200px] md:h-[400px] md:mt-0 z-10 overflow-x-hidden mt-6 md:ml-2">
          <MapContainer
            center={[listing.geolocation.lat, listing.geolocation.lng]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[listing.geolocation?.lat, listing.geolocation?.lng]}
            >
              <Popup>{listing.address}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </main>
  );
}
