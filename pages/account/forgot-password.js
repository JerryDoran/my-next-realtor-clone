import Link from 'next/link';
import { useState } from 'react';
import OAuth from '../../components/global/OAuth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.config';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent!');
    } catch (error) {
      toast.error('Could not send reset password!');
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <form
        className="bg-white py-20 px-5 rounded-lg max-w-xl flex flex-col items-center outline-none focus-none sm:px-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mb-4">Reset Password</h1>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <div>
          <p className="text-sm text-gray-500">
            Don't have an account?
            <Link href="/account/signup">
              <span className="ml-2 text-blue-500 underline cursor-pointer">
                Register
              </span>
            </Link>
          </p>
        </div>
        <button
          className="w-full mt-6 mb-2 bg-gray-800 text-white p-2 rounded-md transition hover:bg-gray-700"
          type="submit"
        >
          Send Reset Password
        </button>
        <div className="flex items-center my-1 before:border-t before:flex-1 before:border-gray-300 before:mr-2 after:border-t after:flex-1 after:border-gray-300 after:ml-2">
          <p className="text-sm">OR</p>
        </div>

        <OAuth title="Continue" />
        <p className="text-sm text-gray-500 mt-6">
          <Link href="/account/login">
            <span className="ml-2 text-blue-500 underline cursor-pointer">
              Sign in instead
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
