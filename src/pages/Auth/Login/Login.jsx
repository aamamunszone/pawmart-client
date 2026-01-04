import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      await signInUser(formData.email, formData.password);
      toast.success('Successfully logged in!');
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email address');
      } else if (error.code === 'auth/too-many-requests') {
        toast.error('Too many failed attempts. Please try again later');
      } else {
        toast.error(error.message || 'Login failed!');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      toast.success('Successfully logged in with Google!');
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Google login failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>PawMart | Login</title>

      <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-8">
        <motion.div
          className="w-full max-w-4xl bg-base-200 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left-side Info Panel */}
          <div className="w-full md:w-1/2 bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 text-white flex flex-col justify-center items-center p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">
              🐾 Welcome Back!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Login to continue your PawMart journey and manage your listings.
            </p>
            <p className="text-sm md:text-base text-white/80">
              Enter your credentials or use Google to sign in quickly.
            </p>
          </div>

          {/* Right-side Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-base-100">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-base-content">Login</h2>
              <p className="mt-2 text-sm text-base-content/70">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
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
                {loading ? 'Logging in...' : 'Login'}
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
                  Login with Google
                </span>
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-base-content/70">
              Don't have an account?{' '}
              <Link
                to="/auth/register"
                className="font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Register here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
