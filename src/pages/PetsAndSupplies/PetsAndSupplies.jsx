import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import ListingCard from '../../components/listing/ListingCard/ListingCard';
import Loader from '../../components/common/Loader/Loader';
import Container from '../../components/common/Container/Container';
import useAxios from '../../hooks/useAxios';

const PetsAndSupplies = () => {
  const axiosPublic = useAxios();
  const [listings, setListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [sortByPrice, setSortByPrice] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const categories = ['All', 'Pets', 'Food', 'Accessories', 'Care Products'];
  const ratings = ['All', '5', '4', '3', '2', '1'];

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

    // Rating filter
    if (selectedRating !== 'All') {
      const ratingValue = parseInt(selectedRating);
      filtered = filtered.filter(
        (listing) =>
          listing.rating && Math.floor(listing.rating) === ratingValue
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

    // Sort by price
    if (sortByPrice === 'low-to-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'high-to-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [listings, selectedCategory, selectedRating, searchQuery, sortByPrice]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = filteredListings.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedRating, searchQuery, sortByPrice]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleSortChange = (e) => {
    setSortByPrice(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedRating('All');
    setSortByPrice('default');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

            {/* Sort by Price */}
            <div className="mb-6">
              <h3 className="text-base-content font-semibold mb-4">
                Sort by Price :
              </h3>
              <select
                value={sortByPrice}
                onChange={handleSortChange}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-base-100 border-2 border-transparent focus:border-primary focus:outline-none transition-all duration-300 text-base-content font-semibold cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
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

            {/* Rating Filters */}
            <div>
              <h3 className="text-base-content font-semibold mb-4">
                Filter by Rating :
              </h3>
              <div className="flex flex-wrap gap-3">
                {ratings.map((rating) => (
                  <motion.button
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                      selectedRating === rating
                        ? 'bg-linear-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                        : 'bg-base-100 text-base-content hover:bg-base-300'
                    }`}
                  >
                    {rating === 'All' ? (
                      'All Ratings'
                    ) : (
                      <>
                        <FaStar className="text-current" />
                        {rating}+
                      </>
                    )}
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
              {(searchQuery ||
                selectedCategory !== 'All' ||
                selectedRating !== 'All' ||
                sortByPrice !== 'default') && (
                <button
                  onClick={handleResetFilters}
                  className="text-sm text-error hover:underline font-semibold"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </motion.div>
        </Container>

        {/* Listings Grid */}
        <Container className="py-12">
          {currentListings.length > 0 ? (
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={`${selectedCategory}-${selectedRating}-${searchQuery}-${sortByPrice}-${currentPage}`}
              >
                {currentListings.map((listing) => (
                  <motion.div key={listing._id} variants={cardVariants}>
                    <ListingCard listing={listing} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  className="flex justify-center items-center gap-2 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Previous Button */}
                  <motion.button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      currentPage === 1
                        ? 'bg-base-300 text-base-content/50 cursor-not-allowed'
                        : 'bg-linear-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg'
                    }`}
                  >
                    Previous
                  </motion.button>

                  {/* Page Numbers */}
                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      // Show first page, last page, current page, and pages around current
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <motion.button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full font-bold transition-all ${
                              currentPage === page
                                ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                                : 'bg-base-200 text-base-content hover:bg-base-300'
                            }`}
                          >
                            {page}
                          </motion.button>
                        );
                      } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return (
                          <span
                            key={page}
                            className="flex items-center px-2 text-base-content/50"
                          >
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Next Button */}
                  <motion.button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    whileHover={{
                      scale: currentPage === totalPages ? 1 : 1.05,
                    }}
                    whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      currentPage === totalPages
                        ? 'bg-base-300 text-base-content/50 cursor-not-allowed'
                        : 'bg-linear-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg'
                    }`}
                  >
                    Next
                  </motion.button>
                </motion.div>
              )}
            </>
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
