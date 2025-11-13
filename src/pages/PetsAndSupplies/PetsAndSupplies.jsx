import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import ListingCard from '../../components/listing/ListingCard/ListingCard';
import Loader from '../../components/common/Loader/Loader';
import Container from '../../components/common/Container/Container';
import useAxios from '../../hooks/useAxios';

const PetsAndSupplies = () => {
  const axiosPublic = useAxios();
  const [listings, setListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Pets', 'Food', 'Accessories', 'Care Products'];

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get('/listings');
        setListings(response.data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load listings!');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [axiosPublic]);

  const filteredListings = useMemo(() => {
    let filtered = [...listings];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (listing) => listing.category === selectedCategory
      );
    }

    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (listing) =>
          listing.name.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [listings, selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
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
      <title>PawMart | Pets & Supplies</title>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <motion.div
          className="relative bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 pt-14 pb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container className="text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              🐾 Pets & Supplies
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Browse all available pets and supplies. Find your perfect
              companion or shop for quality pet products.
            </motion.p>
          </Container>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
                className="fill-base-100"
              />
            </svg>
          </div>
        </motion.div>

        {/* Filters Section */}
        <Container className="-mt-8 relative z-10">
          <motion.div
            className="bg-base-200 rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 pl-14 rounded-full bg-base-100 border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300 text-base-content"
                />
                <svg
                  className="w-6 h-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-base-content/50"
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

            {/* Category Filters */}
            <div>
              <h3 className="text-base-content font-semibold mb-4">
                Filter by Category :
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                        : 'bg-base-100 text-base-content hover:bg-base-300'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-base-content/70">
                Showing{' '}
                <span className="font-bold text-primary">
                  {filteredListings.length}
                </span>{' '}
                result{filteredListings.length !== 1 ? 's' : ''}
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
        <Container className="py-12">
          {filteredListings.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${selectedCategory}-${searchQuery}`}
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
              <div className="text-8xl mb-6">😿</div>
              <h3 className="text-2xl font-bold text-base-content mb-2">
                No listings found
              </h3>
              <p className="text-base-content/70 mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={handleResetFilters}
                className="btn btn-primary rounded-full"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </Container>
      </div>
    </>
  );
};

export default PetsAndSupplies;
