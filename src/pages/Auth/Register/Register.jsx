import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.photoURL.trim()) {
      newErrors.photoURL = 'Photo URL is required';
    } else if (!/^https?:\/\/.+\..+/.test(formData.photoURL)) {
      newErrors.photoURL = 'Please enter a valid URL';
    }

    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors.join('. ');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      setLoading(true);
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
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already registered');
        setErrors({ email: 'This email is already in use' });
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email address');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak');
      } else {
        toast.error(error.message || 'Registration failed!');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      toast.success('Successfully registered with Google!');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Google registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>PawMart | Register</title>

      <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-8">
        <motion.div
          className="w-full max-w-4xl bg-base-200 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
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
          <div className="md:w-1/2 p-8 bg-base-100">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-base-content">
                Create Account
              </h2>
              <p className="mt-2 text-sm text-base-content/70">
                Join PawMart community today
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-base-200 text-base-content border-2 rounded-lg focus:outline-none transition-all ${
                      errors.name
                        ? 'border-error focus:border-error'
                        : 'border-transparent focus:border-primary'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-error">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-base-200 text-base-content border-2 rounded-lg focus:outline-none transition-all ${
                      errors.email
                        ? 'border-error focus:border-error'
                        : 'border-transparent focus:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error">{errors.email}</p>
                  )}
                </div>

                {/* Photo URL Field */}
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">
                    Photo URL *
                  </label>
                  <input
                    name="photoURL"
                    type="url"
                    value={formData.photoURL}
                    onChange={handleChange}
                    placeholder="https://example.com/photo.jpg"
                    className={`w-full px-4 py-3 bg-base-200 text-base-content border-2 rounded-lg focus:outline-none transition-all ${
                      errors.photoURL
                        ? 'border-error focus:border-error'
                        : 'border-transparent focus:border-primary'
                    }`}
                  />
                  {errors.photoURL && (
                    <p className="mt-1 text-xs text-error">{errors.photoURL}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-base-content mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`w-full px-4 py-3 pr-12 bg-base-200 text-base-content border-2 rounded-lg focus:outline-none transition-all ${
                        errors.password
                          ? 'border-error focus:border-error'
                          : 'border-transparent focus:border-primary'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-base-content transition-colors"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="w-5 h-5" />
                      ) : (
                        <FaEye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-error">{errors.password}</p>
                  )}
                  <p className="mt-2 text-xs text-base-content/60">
                    Must contain: 6+ characters, 1 uppercase, 1 lowercase
                  </p>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-3 px-4 rounded-full shadow-lg text-white font-bold bg-linear-to-r from-blue-600 to-cyan-500 hover:shadow-xl transition-all ${
                  loading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-[1.02]'
                }`}
              >
                {loading ? 'Creating Account...' : 'Register'}
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-content/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-base-100 text-base-content/70">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className={`mt-4 w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-base-content/20 rounded-full shadow-sm bg-base-200 hover:bg-base-300 transition-all ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FcGoogle className="text-2xl" />
                <span className="text-sm font-medium text-base-content">
                  Register with Google
                </span>
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-base-content/70">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="font-bold text-primary hover:text-primary/80 transition-colors"
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
