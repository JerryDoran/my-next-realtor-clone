import HomeSlider from '../components/HomeSlider';
import { useEffect, useState } from 'react';
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase.config.js';
import Link from 'next/link';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [sellListings, setSellListings] = useState([]);

  // offers
  useEffect(() => {
    async function fetchListings() {
      try {
        // get ref
        const listingsRef = collection(db, 'listings');

        // create query
        const q = query(
          listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(4)
        );

        // execute query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  // rent
  useEffect(() => {
    async function fetchListings() {
      try {
        // get ref
        const listingsRef = collection(db, 'listings');

        // create query
        const q = query(
          listingsRef,
          where('type', '==', 'rent'),
          orderBy('timestamp', 'desc'),
          limit(4)
        );

        // execute query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  // sell
  useEffect(() => {
    async function fetchListings() {
      try {
        // get ref
        const listingsRef = collection(db, 'listings');

        // create query
        const q = query(
          listingsRef,
          where('type', '==', 'sell'),
          orderBy('timestamp', 'desc'),
          limit(4)
        );

        // execute query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSellListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  return (
    <div>
      <HomeSlider />
      <div className="py-4 px-4 lg:px-40 mx-auto">
        {offerListings && offerListings.length > 0 && (
          <section className="mt-6">
            <h2 className="px-3 text-2xl font-semibold">Recent Offers</h2>
            <Link href="/offers">
              <button className="px-3 text-sm text-blue-600 hover:text-blue-800 transition">
                Show more offers
              </button>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offerListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </section>
        )}
        {rentListings && rentListings.length > 0 && (
          <section className="mt-6">
            <h2 className="px-3 text-2xl font-semibold">Places for Rent</h2>
            <Link href="/type/rent">
              <button className="px-3 text-sm text-blue-600 hover:text-blue-800 transition">
                Show more places for rent
              </button>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </section>
        )}
        {sellListings && sellListings.length > 0 && (
          <section className="mt-6">
            <h2 className="px-3 text-2xl font-semibold">Places for Sale</h2>
            <Link href="/type/sell">
              <button className="px-3 text-sm text-blue-600 hover:text-blue-800 transition">
                Show more places for sale
              </button>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sellListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
