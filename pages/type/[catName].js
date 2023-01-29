import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../../firebase.config.js';
import Spinner from '../../components/global/Spinner.js';
import ListingItem from '../../components/ListingItem.js';
import { useRouter } from 'next/router';

export default function CategoryType() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastListing, setLastListing] = useState(null);
  const router = useRouter();

  console.log(router.query);

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, 'listings');
        const q = query(
          listingRef,
          where('type', '==', router.query.catName),
          orderBy('timestamp', 'desc'),
          limit(4)
        );

        // execute query
        const querySnap = await getDocs(q);
        const lastVisibleListing = querySnap.docs[querySnap.docs.length - 1];
        setLastListing(lastVisibleListing);
        console.log(lastListing);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch listings!');
      }
    }
    fetchListings();
  }, [router.query.catName]);

  const fetchMoreListings = async () => {
    try {
      const listingRef = collection(db, 'listings');
      const q = query(
        listingRef,
        where('type', '==', router.query.catName),
        orderBy('timestamp', 'desc'),
        startAfter(lastListing),
        limit(4)
      );

      // execute query
      const querySnap = await getDocs(q);
      const lastVisibleListing = querySnap.docs[querySnap.docs.length - 1];
      console.log(lastVisibleListing);

      setLastListing(lastVisibleListing);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevState) => [...prevState, ...listings]);
      console.log(listings);

      setLoading(false);
    } catch (error) {
      toast.error('Could not fetch listings!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3">
      <h1 className="text-3xl text-center my-6 font-bold">
        {router.query.catName === 'rent'
          ? 'Places for Rent'
          : 'Places for Sale'}
      </h1>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </main>
          {lastListing && (
            <div className="flex justify-center align-center mt-8 ">
              <button
                className="bg-blue-600 px-3 py-1.5 text-white border-gray-300 rounded transition hover:bg-blue-700"
                onClick={fetchMoreListings}
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p>There are no current offers</p>
      )}
    </div>
  );
}
