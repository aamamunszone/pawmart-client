import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';

const NotFound = () => {
  return (
    <>
      <title>404 - Page Not Found | PawMart</title>

      <div className="min-h-screen flex items-center justify-center bg-base-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

          {/* Floating Paw Prints */}
          <motion.div
            className="absolute text-6xl opacity-10"
            style={{ left: '10%', top: '15%' }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🐾
          </motion.div>
          <motion.div
            className="absolute text-5xl opacity-10"
            style={{ right: '15%', top: '25%' }}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🐾
          </motion.div>
          <motion.div
            className="absolute text-7xl opacity-10"
            style={{ left: '20%', bottom: '20%' }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🐾
          </motion.div>
        </div>

        {/* Main Content */}
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Lost Pet Illustration */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <div className="relative inline-block">
                {/* Main Icon */}
                <motion.div
                  className="text-9xl md:text-[12rem]"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  😿
                </motion.div>

                {/* Orbiting Paw */}
                <motion.div
                  className="absolute text-4xl"
                  style={{ top: '20%', right: '-10%' }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  🐾
                </motion.div>
              </div>
            </motion.div>

            {/* 404 Error Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-7xl md:text-9xl font-black mb-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
                Oops! This Page is Lost
              </h2>
              <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
                Looks like this page went on an adventure and didn't come back.
                Don't worry, we'll help you find your way home!
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Go Home Button */}
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-linear-to-r from-primary to-secondary text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Go Back Home
                </motion.button>
              </Link>

              {/* Browse Pets Button */}
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-base-200 text-base-content font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Browse Pets
                </motion.button>
              </Link>
            </motion.div>

            {/* Popular Links */}
            <motion.div
              className="mt-12 pt-8 border-t border-base-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm text-base-content/60 mb-4">
                You might be looking for:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { name: 'Home', path: '/', icon: '🏠' },
                  { name: 'Pets & Supplies', path: '/shop', icon: '🐾' },
                  { name: 'Services', path: '/services', icon: '💼' },
                  { name: 'My Orders', path: '/orders/my-orders', icon: '📦' },
                ].map((link, index) => (
                  <Link key={index} to={link.path}>
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-base-200 hover:bg-base-300 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>{link.icon}</span>
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              className="fill-primary/30"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default NotFound;
