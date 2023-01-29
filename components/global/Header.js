import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../../firebase.config.js';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const [pageState, setPageState] = useState('Sign In');
  const [pageLink, setPageLink] = useState('login');
  const router = useRouter();
  const pathMatchRoute = (route) => {
    if (route === router.pathname) {
      return true;
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
        setPageLink('profile');
      } else {
        setPageState('Sign In');
        setPageLink('login');
      }
    });
  }, [auth]);

  const handleLogout = () => {
    auth.signOut();
    router.push('/account/login');
  };

  return (
    <header className="py-4 px-4 lg:px-40 mx-auto border-b sticky top-0 z-40 bg-gray-100">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            width={150}
            height={50}
            // objectFit="contain"
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
        <ul className="flex gap-4 text-gray-500">
          <Link href="/">
            <li
              className={`py-1 px-2 text-sm font-semibold border-b-[3px] border-b-transparent ${
                pathMatchRoute('/') && 'text-gray-900 bg-gray-200 rounded-full'
              } cursor-pointer transition hover:text-gray-900`}
            >
              Home
            </li>
          </Link>
          <Link href="/offers">
            <li
              className={`py-1 px-2 text-sm font-semibold border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') &&
                'text-gray-900 bg-gray-200 rounded-full'
              } cursor-pointer transition hover:text-gray-900`}
            >
              Offers
            </li>
          </Link>
          {/* {!loggedIn && ( */}
          <Link href={`/account/${pageLink}`}>
            <li
              className={`py-1 px-2 text-sm font-semibold border-b-[3px] border-b-transparent ${
                (pathMatchRoute('/account/login') ||
                  pathMatchRoute('/account/profile')) &&
                'text-gray-900 bg-gray-200 rounded-full'
              } cursor-pointer transition hover:text-gray-900`}
            >
              {pageState}
            </li>
          </Link>
          {/* )} */}
          {/* {loggedIn && ( */}
          {/* <Link href="/account/profile">
            <li
              className={`py-1 px-2 text-sm font-semibold border-b-[3px] border-b-transparent ${
                pathMatchRoute('/account/profile') &&
                'text-gray-900 bg-gray-200 rounded-full'
              } cursor-pointer transition hover:text-gray-900`}
            >
              Profile
            </li>
          </Link> */}
          {/* )} */}

          {/* {loggedIn && (
            <button
              className="py-1 px-4 text-sm font-semibold border-b-[3px] border-b-transparent 
              text-white bg-gray-800 rounded-full cursor-pointer transition hover:bg-gray-700"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          )} */}
        </ul>
      </div>
    </header>
  );
}
