import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Loader from '../../components/common/Loader/Loader';
import ListingCard from '../../components/listing/ListingCard/ListingCard';
import Container from '../../components/common/Container/Container';
import useAxios from '../../hooks/useAxios';

const CategoryFiltered = () => {
  const axiosPublic = useAxios();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredListings, setFilteredListings] = useState([]);

  // Fetch category listings
  useEffect(() => {
    const fetchCategoryListings = async () => {
      try {
        setLoading(true);
        const { data } = await axiosPublic.get(
          `/listings/category/${categoryName}`
        );
        setListings(data);
        setFilteredListings(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load listings!');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryListings();
  }, [categoryName, axiosPublic]);

  // Filter by search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredListings(listings);
      return;
    }

    const filtered = listings.filter(
      (listing) =>
        listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [listings, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Pets: '🐶',
      Food: '🍖',
      Accessories: '🧸',
      'Care Products': '💊',
    };
    return icons[category] || '🐾';
  };

  const getCategoryColor = (category) => {
    const colors = {
      Pets: 'from-blue-400 to-blue-600',
      Food: 'from-green-400 to-green-600',
      Accessories: 'from-yellow-400 to-yellow-600',
      'Care Products': 'from-red-400 to-red-600',
    };
    return colors[category] || 'from-blue-400 to-cyan-400';
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      Pets: 'Find your perfect companion! All pets listed here are available for adoption. Give them a loving home today.',
      Food: 'High-quality pet food to keep your furry friends healthy and happy. Browse our selection of nutritious options.',
      Accessories:
        'Everything your pet needs from toys to carriers. Make their life more comfortable and fun!',
      'Care Products':
        'Keep your pets healthy with our range of care products. From grooming to health supplements.',
    };
    return (
      descriptions[category] || 'Browse our collection of quality pet products.'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <title>{`PawMart | ${categoryName}`}</title>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <motion.div
          className={`relative bg-linear-to-br ${getCategoryColor(
            categoryName
          )} py-16`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container className="text-center">
            <motion.div
              className="text-6xl md:text-7xl mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            >
              {getCategoryIcon(categoryName)}
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {categoryName}
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Browse all available {categoryName.toLowerCase()} in our
              collection
            </motion.p>
          </Container>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 34.7C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z"
                className="fill-base-100"
              />
            </svg>
          </div>
        </motion.div>

        {/* Search & Filter Section */}
        <Container className="-mt-6 relative z-10">
          <motion.div
            className="bg-base-200 rounded-2xl shadow-xl p-5 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search Bar */}
              <div className="w-full md:flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search in this category..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-5 py-3 pl-12 rounded-full bg-base-100 border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300 text-base-content text-sm md:text-base"
                  />
                  <svg
                    className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Back Button */}
              <motion.button
                onClick={() => navigate('/shop')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline btn-primary gap-2 w-full md:w-auto"
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
                Back to All
              </motion.button>
            </div>

            {/* Results Count */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-base-content/70 text-sm">
                Showing{' '}
                <span className="font-bold text-primary">
                  {filteredListings.length}
                </span>{' '}
                result{filteredListings.length !== 1 ? 's' : ''} in{' '}
                {categoryName}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-sm text-error hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          </motion.div>
        </Container>

        {/* Listings Grid */}
        <Container className="py-10">
          {filteredListings.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={searchQuery}
            >
              {filteredListings.map((listing) => (
                <motion.div key={listing._id} variants={cardVariants}>
                  <ListingCard listing={listing} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-7xl md:text-8xl mb-6">😿</div>
              <h3 className="text-xl md:text-2xl font-bold text-base-content mb-2">
                No {categoryName.toLowerCase()} found
              </h3>
              <p className="text-base-content/70 mb-6 text-sm md:text-base">
                {searchQuery
                  ? 'Try adjusting your search query'
                  : `No listings available in this category yet`}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn btn-primary"
                  >
                    Clear Search
                  </button>
                )}
                <button
                  onClick={() => navigate('/shop')}
                  className="btn btn-outline btn-primary"
                >
                  Browse All Listings
                </button>
              </div>
            </motion.div>
          )}
        </Container>

        {/* Info Section */}
        {filteredListings.length > 0 && (
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              className={`bg-linear-to-r ${getCategoryColor(
                categoryName
              )} bg-opacity-10 rounded-2xl p-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-4xl shrink-0">
                  {getCategoryIcon(categoryName)}
                </div>
                <div>
                  <h4 className="font-semibold text-base-content mb-2 text-lg">
                    About {categoryName}
                  </h4>
                  <p className="text-base-content/70 text-sm">
                    {getCategoryDescription(categoryName)}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryFiltered;
