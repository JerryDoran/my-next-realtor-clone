import Link from 'next/link';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import OAuth from '../../components/global/OAuth';
import { auth } from '../../firebase.config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
      if (userCredentials.user) {
        router.push('/');
      }
    } catch (error) {
      toast.error('Invalid user credentials!');
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <form
        className="bg-white py-20 px-5 rounded-lg max-w-xl flex flex-col items-center outline-none focus-none sm:px-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mb-4">Sign In</h1>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            className="input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {showPassword ? (
            <AiFillEyeInvisible
              className="absolute right-5 top-6 text-xl cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <AiFillEye
              className="absolute right-5 top-6 text-xl cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>
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
          Sign In with Email & Password
        </button>
        <div className="flex items-center my-1 before:border-t before:flex-1 before:border-gray-300 before:mr-2 after:border-t after:flex-1 after:border-gray-300 after:ml-2">
          <p className="text-sm">OR</p>
        </div>
        <OAuth title="Sign In" />
        <p className="text-sm text-gray-500 mt-6">
          <Link href="/account/forgot-password">
            <span className="ml-2 text-blue-500 underline cursor-pointer">
              Forgot password?
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
