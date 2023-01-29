import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase.config.js';
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function OAuth({ title }) {
  const router = useRouter();

  const handleLogInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      console.log(user);
      // check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      router.push('/');
    } catch (error) {
      toast.error('Could not aunthenticate with Google');
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <button
        className="w-full flex mt-2 items-center gap-2 justify-center bg-gray-800 text-white p-2 rounded-md transition hover:bg-gray-700"
        type="button"
        onClick={handleLogInWithGoogle}
      >
        <FcGoogle className="w-6 h-5" /> {title} with Google
      </button>
    </div>
  );
}
