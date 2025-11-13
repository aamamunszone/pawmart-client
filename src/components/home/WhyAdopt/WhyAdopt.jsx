import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';
import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const WhyAdopt = () => {
  const navigate = useNavigate();

  const reasons = [
    {
      id: 1,
      icon: '❤️',
      title: 'Save a Life',
      description:
        'Every adoption gives a homeless pet a second chance at life and happiness. You become their hero.',
      color: 'from-red-400 to-pink-600',
    },
    {
      id: 2,
      icon: '🏠',
      title: 'Combat Homelessness',
      description:
        'Millions of pets need homes. Your adoption makes a real difference in fighting pet homelessness.',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      id: 3,
      icon: '💰',
      title: 'Cost Effective',
      description:
        'Adoption fees are much lower than buying from breeders. Save money while saving lives.',
      color: 'from-green-400 to-emerald-600',
    },
    {
      id: 4,
      icon: '🩺',
      title: 'Health Benefits',
      description:
        'Most shelter pets are vaccinated, spayed/neutered, and health-checked before adoption.',
      color: 'from-purple-400 to-violet-600',
    },
  ];

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
    <div className="py-20 bg-base-200">
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
              Why Adopt from PawMart ?
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Adopting a pet is one of the most rewarding experiences. Here's why
            you should choose adoption over shopping for your next furry friend.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-base-100 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon with Animation */}
              <motion.div
                className="text-6xl mb-4 relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * reason.id,
                  duration: 0.6,
                  type: 'spring',
                }}
              >
                {reason.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-base-content mb-3 relative z-10">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-base-content/70 relative z-10">
                {reason.description}
              </p>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200"
              alt="Happy adopted pets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/90 to-cyan-600/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-6">
            <motion.h3
              className="text-3xl md:text-4xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Typewriter
                words={[
                  'Ready to Make a Difference ?',
                  "Adopt, Don't Shop !",
                  'Give Them a Second Chance 💕',
                  'Change a Life Today 🐾',
                  'Be Their Forever Hero 🏡',
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Browse our available pets and give them the loving home they
              deserve. Every adoption changes two lives - theirs and yours.
            </motion.p>
            <motion.button
              onClick={() => navigate('/shop')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <span>View Available Pets</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default WhyAdopt;
