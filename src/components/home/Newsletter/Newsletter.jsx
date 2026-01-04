import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Container from '../../common/Container/Container';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing! 🎉');
      setEmail('');
    }
  };

  return (
    <div className="py-20 bg-base-200">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200"
              alt="Newsletter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/95 to-cyan-600/95"></div>
          </div>

          <div className="relative z-10 text-center py-16 px-6">
            <motion.div
              className="text-6xl mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <FaEnvelope className="inline-block text-white" />
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Stay Connected with PawMart
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Subscribe to our newsletter for pet care tips, adoption updates,
              and exclusive offers delivered to your inbox
            </motion.p>

            <motion.div
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-base-content focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
              />
              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl"
              >
                Subscribe Now
              </motion.button>
            </motion.div>

            <motion.p
              className="text-sm text-white/70 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Join 10,000+ pet lovers already subscribed ✨
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Newsletter;
