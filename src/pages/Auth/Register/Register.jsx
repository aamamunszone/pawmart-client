import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 6)
      errors.push('Password must be at least 6 characters');
    if (!/[A-Z]/.test(password))
      errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(password))
      errors.push('Password must contain at least one lowercase letter');
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      setErrors({ password: passwordErrors.join('. ') });
      toast.error(passwordErrors.join('. '));
      return;
    }

    try {
      const userCredential = await createUser(
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      toast.success('Registration successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Registration failed!');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success('Successfully registered with Google!');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Google login failed!');
    }
  };

  return (
    <>
      <title>PawMart | Register</title>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left-side Info */}
          <div className="md:w-1/2 bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 text-white flex flex-col justify-center items-center p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">
              🐾 Welcome to PawMart
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Join our community, discover pets, products, and create your own
              listings.
            </p>
            <p className="text-sm md:text-base text-white/80">
              Enjoy seamless account creation, manage your listings, and connect
              with fellow pet lovers.
            </p>
          </div>

          {/* Right-side Form */}
          <div className="md:w-1/2 p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Create Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join PawMart community today
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Photo URL
                  </label>
                  <input
                    name="photoURL"
                    type="url"
                    required
                    value={formData.photoURL}
                    onChange={handleChange}
                    placeholder="Enter photo URL"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Must contain: 6+ characters, 1 uppercase, 1 lowercase
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Register
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="mt-4 w-full flex items-center justify-center gap-3 py-3 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <FcGoogle className="text-2xl" />
                <span className="text-sm font-medium text-gray-700">
                  Register with Google
                </span>
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="font-medium text-primary hover:text-primary/90"
              >
                Login here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Register;
