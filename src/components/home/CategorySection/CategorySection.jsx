import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Pets',
      icon: '🐶',
      description: 'Find your perfect companion',
      bgGradient: 'from-blue-400 to-blue-600',
      image:
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800',
    },
    {
      id: 2,
      name: 'Food',
      icon: '🍖',
      description: 'Nutritious pet food',
      bgGradient: 'from-green-400 to-green-600',
      image:
        'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800',
    },
    {
      id: 3,
      name: 'Accessories',
      icon: '🧸',
      description: 'Toys and accessories',
      bgGradient: 'from-yellow-400 to-yellow-600',
      image:
        'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800',
    },
    {
      id: 4,
      name: 'Care Products',
      icon: '💊',
      description: 'Health and care essentials',
      bgGradient: 'from-red-400 to-red-600',
      image:
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
    },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/category-filtered-product/${categoryName}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section className="py-20 bg-base-200">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Browse by Category
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Find exactly what you're looking for
          </motion.p>
        </motion.div>

        {/* Category Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.bgGradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative h-64 flex flex-col items-center justify-center text-white p-6">
                {/* Icon with Animation */}
                <motion.div
                  className="text-6xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 * category.id,
                    duration: 0.6,
                    type: 'spring',
                  }}
                >
                  {category.icon}
                </motion.div>

                {/* Category Name */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base font-light drop-shadow-md">
                  {category.description}
                </p>

                {/* Arrow Icon */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CategorySection;
