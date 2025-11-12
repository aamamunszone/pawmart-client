import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/common/Loader/Loader';
import OrderModal from '../../components/listing/OrderModal/OrderModal';
import Container from '../../components/common/Container/Container';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPrivate = useAxiosSecure();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        setLoading(true);
        const { data } = await axiosPrivate.get(`/listings/${id}`);
        setListing(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load listing details!');
        navigate('/shop');
      } finally {
        setLoading(false);
      }
    };

    fetchListingDetails();
  }, [id, navigate, axiosPrivate]);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (!listing) {
    return (
      <>
        <title>{'PawMart | Not Found'}</title>

        <div className="min-h-screen flex items-center justify-center bg-base-100">
          <div className="text-center">
            <div className="text-8xl mb-6">😿</div>
            <h2 className="text-2xl font-bold text-base-content mb-2">
              Listing Not Found
            </h2>
            <button
              onClick={() => navigate('/shop')}
              className="btn btn-primary mt-4"
            >
              Browse Listings
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <title>{`PawMart | ${listing.name || 'Details'}`}</title>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <motion.div
          className="relative bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-ghost text-white gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back
            </motion.button>
          </Container>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0 0L60 6C120 12 240 24 360 28C480 32 600 28 720 26C840 24 960 24 1080 28C1200 32 1320 40 1380 44L1440 48V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V0Z"
                className="fill-base-100"
              />
            </svg>
          </div>
        </motion.div>

        {/* Main Content */}
        <Container className="py-12 -mt-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                    {listing.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content mb-2">
                  {listing.name}
                </h1>
                <div className="flex items-center gap-2 text-base-content/70">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{listing.location}</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-base-200 rounded-2xl p-6">
                {listing.price === 0 || listing.category === 'Pets' ? (
                  <div>
                    <p className="text-sm text-base-content/70 mb-1">
                      Adoption Fee
                    </p>
                    <p className="text-4xl font-black bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                      Free for Adoption
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-base-content/70 mb-1">Price</p>
                    <p className="text-4xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      ৳{listing.price}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-base-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-base-content mb-3 flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Description
                </h3>
                <p className="text-base-content/80 leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Owner Info */}
              <div className="bg-base-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-base-content mb-3 flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Owner Information
                </h3>
                <div className="flex items-center gap-2 text-base-content/70">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{listing.email}</span>
                </div>
              </div>

              {/* Listing Date */}
              <div className="bg-base-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-base-content mb-3 flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Listed Date
                </h3>
                <p className="text-base-content/70">
                  {new Date(listing.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Order Button */}
              <motion.button
                onClick={handleOrderClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {listing.category === 'Pets' ? 'Adopt Now' : 'Order Now'}
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Order Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <OrderModal
            listing={listing}
            user={user}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ListingDetails;
