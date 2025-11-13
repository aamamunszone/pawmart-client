import { motion } from 'framer-motion';
import {
  FaPaw,
  FaHeart,
  FaShoppingCart,
  FaHandHoldingHeart,
  FaTruck,
  FaUserMd,
  FaHome,
  FaGift,
} from 'react-icons/fa';
import Container from '../../components/common/Container/Container';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaPaw,
      title: 'Pet Adoption',
      description:
        'Find your perfect companion from our collection of loving pets waiting for their forever homes. Free adoption services with complete documentation.',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      id: 2,
      icon: FaShoppingCart,
      title: 'Pet Supplies Store',
      description:
        'Browse our extensive collection of high-quality pet food, toys, accessories, and care products at competitive prices.',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      id: 3,
      icon: FaHandHoldingHeart,
      title: 'Rescue & Rehoming',
      description:
        'We help rescue abandoned and stray pets, providing them care and finding them loving homes through our network.',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
    },
    {
      id: 4,
      icon: FaTruck,
      title: 'Home Delivery',
      description:
        'Convenient home delivery service for all pet supplies. Get your orders delivered right to your doorstep safely.',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      id: 5,
      icon: FaUserMd,
      title: 'Pet Care Consultation',
      description:
        'Get expert advice on pet care, nutrition, and health. Connect with experienced pet owners and caregivers.',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      id: 6,
      icon: FaHome,
      title: 'Pet Boarding Referrals',
      description:
        'Find trusted pet boarding services when you travel. We connect you with verified and caring pet sitters.',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-600',
    },
    {
      id: 7,
      icon: FaGift,
      title: 'Pet Accessories',
      description:
        'Unique and stylish accessories for your pets. From collars to carriers, find everything to pamper your pet.',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
    },
    {
      id: 8,
      icon: FaHeart,
      title: 'Community Support',
      description:
        'Join our community of pet lovers. Share experiences, get tips, and connect with fellow pet parents.',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <>
      <title>PawMart | Our Services</title>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <motion.div
          className="relative bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 pt-14 pb-28"
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
              🐾
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Everything you need for your beloved pets, all in one place
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

        {/* Services Grid */}
        <Container className="py-12 -mt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-base-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon Header */}
                <div
                  className={`h-32 bg-linear-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <service.icon className="text-6xl text-white drop-shadow-lg" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </Container>

        {/* CTA Section */}
        <Container className="pb-12">
          <motion.div
            className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of happy pet parents who trust PawMart for all
              their pet needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => (window.location.href = '/shop')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-lg bg-white text-blue-600 hover:bg-white/90 border-0 gap-2"
              >
                <FaShoppingCart />
                Browse Pets & Supplies
              </motion.button>
              <motion.button
                onClick={() => (window.location.href = '/contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-blue-600 gap-2"
              >
                <FaHeart />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </Container>

        {/* Stats Section */}
        <Container className="pb-12">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { number: '500+', label: 'Pets Adopted', icon: '🐾' },
              { number: '1000+', label: 'Happy Customers', icon: '😊' },
              { number: '50+', label: 'Products', icon: '🛒' },
              { number: '24/7', label: 'Support', icon: '💬' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-base-200 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-base-content/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Services;
