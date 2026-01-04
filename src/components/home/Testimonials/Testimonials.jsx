import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Container from '../../common/Container/Container';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Tasnia Rahman',
      role: 'Dog Parent',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      text: 'Adopting Max from PawMart was the best decision ever! The team was so helpful and made the process smooth. Max is now a happy member of our family.',
      pet: 'Golden Retriever',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Imran Hossain',
      role: 'Cat Lover',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      text: 'I found my perfect companion through PawMart. Luna is such a sweetheart and the adoption process was incredibly easy. Highly recommended!',
      pet: 'Persian Cat',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      name: 'Anika Chowdhury',
      role: 'Pet Enthusiast',
      image: 'https://randomuser.me/api/portraits/women/67.jpg',
      rating: 5,
      text: 'PawMart not only helped me adopt a beautiful pet but also provided excellent guidance on pet care. Their support has been invaluable!',
      pet: 'Labrador Mix',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 4,
      name: 'Fahad Ahmed',
      role: 'First-time Owner',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      rating: 5,
      text: 'As a first-time pet owner, I was nervous. But PawMart made everything so easy! Their team answered all my questions and my cat Charlie is thriving.',
      pet: 'Bengal Cat',
      color: 'from-yellow-400 to-yellow-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <div className="py-20 bg-base-200">
      <Container>
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
              What Pet Parents Say
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Real stories from happy pet parents who found their perfect
            companions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-base-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`h-32 bg-linear-to-br ${testimonial.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <FaQuoteLeft className="text-6xl text-white drop-shadow-lg" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-base-content">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-base-content/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-base-content/70 mb-3 leading-relaxed">
                  {testimonial.text}
                </p>

                <span className="inline-block px-3 py-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                  Adopted: {testimonial.pet}
                </span>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Testimonials;
