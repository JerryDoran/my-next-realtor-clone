import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA6-YOsCgv24EuQUBLksGSXfFtg4KqEWhs',
  authDomain: 'next-realtor-app.firebaseapp.com',
  projectId: 'next-realtor-app',
  storageBucket: 'next-realtor-app.appspot.com',
  messagingSenderId: '131729271523',
  appId: '1:131729271523:web:55cc3636b9fd037bf4f3d6',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { app, db, auth, storage };
