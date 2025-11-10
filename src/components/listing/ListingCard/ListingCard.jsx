import { motion } from 'framer-motion';

const ListingCard = ({ listing }) => {
  const handleDetailsClick = () => {
    console.log('See Details button clicked!');
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-base-100 shadow-xl cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={listing.image}
          alt={listing.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg">
            {listing.category}
          </span>
        </div>

        {/* linear Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-base-content mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {listing.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-base-content/70 mb-3">
          <svg
            className="w-4 h-4"
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
          <span className="text-sm">{listing.location}</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          {listing.price === 0 || listing.category === 'Pets' ? (
            <span className="text-2xl font-black bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Free for Adoption
            </span>
          ) : (
            <span className="text-2xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ৳{listing.price}
            </span>
          )}
        </div>

        {/* Button */}
        <motion.button
          onClick={handleDetailsClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>See Details</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </motion.button>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default ListingCard;
