import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../../components/global/Spinner';
import { toast } from 'react-toastify';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {
  updateDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db, auth } from '../../firebase.config.js';

export default function EditListing() {
  const [geolocationEnabled, setGeoLocationEnabled] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [listing, setListing] = useState(null);
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: true,
    regularPrice: 0,
    salePrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    salePrice,
    images,
    latitude,
    longitude,
  } = formData;

  const router = useRouter();

  useEffect(() => {
    if (listing && listing.userRef !== auth.currentUser?.uid) {
      toast.error("You can't edit this listing!");
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/account/login');
    }

    setDataLoading(true);
    async function fetchListing() {
      const docRef = doc(db, 'listings', router.query.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setFormData(docSnap.data());
        setDataLoading(false);
      } else {
        router.push('/');
        toast.error('That listing does not exist!');
      }
    }
    fetchListing();
  }, []);

  if (dataLoading) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    let boolean = null;
    if (e.target.value === 'true') boolean = true;
    if (e.target.value === 'false') boolean = false;
    // Checks for inputs with files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    // Checks for inputs of type 'Text/Boolean/Number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: boolean ?? e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDataLoading(true);
    if (+salePrice >= +regularPrice) {
      setDataLoading(false);
      toast.error('Sale price needs to be less than regular price!');
      return;
    }

    if (images.length > 6) {
      setDataLoading(false);
      toast.error('Maximum 6 images are allowed!');
      return;
    }

    let geolocation = {};
    let location;
    if (geolocationEnabled) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`
      );
      const data = await response.json();
      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;

      location = data.status === 'ZERO_RESULTS' && undefined;

      if (location === undefined) {
        setDataLoading(false);
        toast.error('Please enter a correct address!');
        return;
      }
    } else {
      // get info from form data if geolocation is disabled
      geolocation.lat = latitude;
      geolocation.lng = longitude;
    }

    // upload images to firebase
    async function storeImage(image) {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    }

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch((error) => {
      setDataLoading(false);
      toast.error('Images not uploaded!');
      return;
    });

    const updatedFormData = {
      ...formData,
      imgUrls,
      geolocation,
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid,
    };

    delete updatedFormData.images;
    !updatedFormData.offer && delete updatedFormData.salePrice;
    delete updatedFormData.latitude;
    delete updatedFormData.longitude;

    const docRef = doc(db, 'listings', router.query.listingId);

    await updateDoc(docRef, updatedFormData);
    setDataLoading(false);
    toast.success('Listing edited!');
    router.push(`/category/${updatedFormData.type}/${docRef.id}`);
  };

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-[500px] px-2 mx-auto">
      <h1 className="text-2xl text-center m-6 font-medium">Edit Listing</h1>
      <form
        className="border border-gray-300 py-2 px-8 rounded-md bg-white shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="mt-2 font-medium">Sell / Rent</p>
        <div className="flex gap-3">
          <button
            type="button"
            name="type"
            value="sell"
            onClick={handleChange}
            className={`rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'rent'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
          >
            sell
          </button>
          <button
            type="button"
            name="type"
            value="rent"
            onClick={handleChange}
            className={`rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'sell'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
          >
            rent
          </button>
        </div>
        <p className="mt-4 font-medium">Property</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-4 focus:ring-0 focus:border-slate-800"
        />
        <div className="flex gap-6">
          <div>
            <p className="font-medium">Bed</p>
            <input
              type="number"
              name="bedrooms"
              value={bedrooms}
              onChange={handleChange}
              min="1"
              max="50"
              required
              className="w-full px-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-1 focus:ring-0 focus:border-slate-800 text-center"
            />
          </div>
          <div>
            <p className="font-medium">Bath</p>
            <input
              type="number"
              name="bathrooms"
              value={bathrooms}
              onChange={handleChange}
              min="1"
              max="50"
              required
              className=" w-full px-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-4 focus:ring-0 focus:border-slate-800 text-center"
            />
          </div>
        </div>
        <p className="font-medium">Parking</p>
        <div className="flex gap-3">
          <button
            type="button"
            name="parking"
            value={true}
            onClick={handleChange}
            className={`rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            yes
          </button>
          <button
            type="button"
            name="parking"
            value={false}
            onClick={handleChange}
            className={`rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            no
          </button>
        </div>
        <p className="mt-4 font-medium">Furnished</p>
        <div className="flex gap-3">
          <button
            type="button"
            name="furnished"
            value={true}
            onClick={handleChange}
            className={`rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            yes
          </button>
          <button
            type="button"
            name="furnished"
            value={false}
            onClick={handleChange}
            className={`rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            no
          </button>
        </div>
        <p className="mt-4 font-medium">Address</p>
        <textarea
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 mb-2 text-gray-700 border border-gray-300 bg-white rounded transition focus:ring-0 focus:border-slate-800"
        />
        {!geolocationEnabled && (
          <div className="flex space-x-6 justify-start mb-4">
            <div className="">
              <p className="font-medium">Latitude</p>
              <input
                type="number"
                name="latitude"
                value={latitude}
                onChange={handleChange}
                required
                min="-90"
                max="90"
                className="w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
              />
            </div>
            <div className="">
              <p className="font-medium">Longitude</p>
              <input
                type="number"
                name="longitude"
                value={longitude}
                onChange={handleChange}
                required
                min="-180"
                max="180"
                className="w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
              />
            </div>
          </div>
        )}
        <p className="mt-2 font-medium">Description</p>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded transition mb-2 focus:ring-0 focus:border-slate-800"
        />
        <p className="font-medium">Offer</p>
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            name="offer"
            value={true}
            onClick={handleChange}
            className={`rounded px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg border focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            yes
          </button>
          <button
            type="button"
            name="offer"
            value={false}
            onClick={handleChange}
            className={`rounded border px-7 py-2 font-semi-bold text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
          >
            no
          </button>
        </div>
        <div className="flex items-center mb-2">
          <div>
            <p className="font-medium">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                name="regularPrice"
                value={regularPrice}
                onChange={handleChange}
                min="50"
                max="400000000"
                required
                className="w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
              />
              {type === 'rent' && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-4">
            <div className="">
              <p className="font-semibold">Sale price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  name="salePrice"
                  value={salePrice}
                  onChange={handleChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-2 py-2 text-gray-700 border border-gray-300 bg-white rounded transitionfocus:ring-0 focus:border-slate-800 text-center"
                />
                {type === 'rent' && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-4">
          <p className="font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            name="images"
            onChange={handleChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Edit Listing
        </button>
      </form>
    </main>
  );
}
