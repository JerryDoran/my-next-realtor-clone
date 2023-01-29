import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import Spinner from '../components/global/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';

export default function HomeSlider() {
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(true);

  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const router = useRouter();

  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, 'listings');
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    listings && (
      <>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: 'progressbar' }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 2000 }}
        >
          {listings.map((listing) => (
            <SwiperSlide
              key={listing.id}
              onClick={() =>
                router.push(`/category/${listing.data.type}/${listing.id}`)
              }
            >
              <div
                className="relative w-full h-[300px] overflow-hidden cursor-pointer"
                style={{
                  background: `url(${listing.data.imgUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                {listing.data.name}
              </p>
              <p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
                {listing.data.salePrice
                  ? formatter.format(listing.data.salePrice)
                  : formatter.format(listing.data.regularPrice)}
                {listing.data.type === 'rent' && ' / month'}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}
