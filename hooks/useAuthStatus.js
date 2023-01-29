import { useState, useEffect } from 'react';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setLoading(false);
    });
  }, []);

  return { loggedIn, loading };
}
