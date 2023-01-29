import { auth, db } from '../../firebase.config.js';
import { useState, useEffect } from 'react';
import {
  doc,
  collection,
  query,
  updateDoc,
  deleteDoc,
  where,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import Spinner from '../../components/global/Spinner.js';
import { FcHome } from 'react-icons/fc';
import Link from 'next/link.js';
import ListingItem from '../../components/ListingItem.js';

export default function Profile() {
  const [changeDetails, setChangeDetails] = useState(false);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: auth?.currentUser?.displayName,
    email: auth?.currentUser?.email,
  });
  const { name, email } = formData;
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/account/login');
    }
    async function fetchUserListings() {
      const listingRef = collection(db, 'listings');
      const q = query(
        listingRef,
        where('userRef', '==', auth.currentUser?.uid),
        orderBy('timestamp', 'desc')
      );
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
    fetchUserListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      if (auth.currentUser.displayName !== name) {
        // update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in firestore
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success('Profile successfully updated!');
    } catch (error) {
      toast.error('Could not update your profile details!');
      console.log(error);
    }
  };

  const handleDeleteListing = async (listingId) => {
    if (window.confirm('Are you sure you want to delete listing?')) {
      const docRef = doc(db, 'listings', listingId);
      await deleteDoc(docRef);
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success('Successfully deleted listing!');
    }
  };

  const handleEditListing = (listingId) => {
    router.push(`/edit-listing/${listingId}`);
  };

  const handleEdit = () => {
    changeDetails && handleSubmit();
    setChangeDetails((prevState) => !prevState);
  };

  const handleLogout = () => {
    auth.signOut();
    router.push('/');
  };

  return (
    <>
      <section className="profileContainer">
        <h1 className="text-3xl text-center pt-8 font-semi-bold">My Profile</h1>
        <div className="w-full mt-6 px-3 flex flex-col items-center justify-center">
          <form
            className="bg-white py-10 px-5 rounded-lg w-[350px] sm:w-[400px] md:w-[600px] flex flex-col relative"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              className={`input transition ease-in-out w-full ${
                changeDetails && 'bg-red-200 focus:bg-red-200'
              }`}
              placeholder="Username"
              value={name}
              onChange={handleChange}
              disabled={!changeDetails}
            />
            <input
              type="email"
              name="email"
              className="input transition ease-in-out w-full"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              disabled
            />

            <div className="w-full flex justify-between mt-4 text-sm sm:text-lg mb-6">
              <p className=" flex justify-between text-sm text-gray-500">
                Do you want to change your name?
              </p>
              <span
                className="ml-2 text-sm text-red-400 cursor-pointer transition font-semibold hover:text-red-600"
                onClick={handleEdit}
              >
                {changeDetails ? 'Apply change' : 'Edit'}
              </span>
            </div>
            <p
              className="absolute -top-1 right-6 text-sm cursor-pointer mt-4 text-blue-500 duration hover:text-blue-700"
              onClick={handleLogout}
            >
              Sign Out
            </p>
          </form>
          <Link href="/create-listing">
            <button
              className="text-sm w-[350px] sm:w-[400px] md:w-[600px] mt-6 mb-8 bg-black text-white py-4 font-medium shadow-md rounded-md transition hover:bg-gray-800 hover:shadow-lg flex items-center justify-center gap-2"
              type="submit"
            >
              <FcHome className="text-3xl bg-red-200 rounded-full p-1 border-2" />
              SELL OR RENT YOUR HOME
            </button>
          </Link>
        </div>
        <div className="mt-8 max-w-6xl px-3 mx-auto">
          {!loading && listings.length > 0 && (
            <>
              <h2 className="text-2xl text-center font-semibold mb-6">
                My Listings
              </h2>
              <div className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {listings.map((listing) => (
                  <ListingItem
                    key={listing.id}
                    id={listing.id}
                    listing={listing.data}
                    onDelete={() => handleDeleteListing(listing.id)}
                    onEdit={() => handleEditListing(listing.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
