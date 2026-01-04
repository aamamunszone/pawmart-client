import { motion } from 'framer-motion';
import { FaPaw, FaHeart } from 'react-icons/fa';
import Container from '../../common/Container/Container';

const CTASection = () => {
  return (
    <div className="py-20 bg-base-200">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-9xl">🐾</div>
              <div className="absolute bottom-10 right-10 text-9xl">❤️</div>
              <div className="absolute top-1/2 left-1/3 text-7xl">🏠</div>
            </div>
          </div>

          <div className="relative z-10 text-center py-20 px-6">
            <motion.div
              className="flex justify-center gap-4 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <FaPaw className="text-6xl text-white" />
              <FaHeart className="text-6xl text-white" />
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Change a Life?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Thousands of loving pets are waiting for their forever homes. Your
              perfect companion is just a click away. Start your adoption
              journey today and experience unconditional love!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaPaw />
                <span>Browse Available Pets</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaHeart />
                <span>Learn About Adoption</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-1">500+</div>
                <div className="text-sm text-white/80">Pets Adopted</div>
              </div>
              <div className="text-center border-x-2 border-white/30">
                <div className="text-4xl font-black text-white mb-1">1000+</div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-1">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default CTASection;
