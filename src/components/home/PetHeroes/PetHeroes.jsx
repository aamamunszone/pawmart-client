import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';

const PetHeroes = () => {
  const heroes = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      role: 'Animal Rescuer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      story:
        'Adopted 3 rescue dogs and now volunteers at local shelters every weekend. Sarah has helped find homes for over 50 pets.',
      pets: '3 Dogs Adopted',
      badge: '🏆',
      socialImpact: '50+ Pets Helped',
    },
    {
      id: 2,
      name: 'Rakib Hasan',
      role: 'Foster Parent',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      story:
        'Foster parent to 15+ cats over the years, helping them find forever homes. His dedication has saved countless lives.',
      pets: '15+ Cats Fostered',
      badge: '❤️',
      socialImpact: 'Community Hero',
    },
    {
      id: 3,
      name: 'Nadia Khan',
      role: 'Rescue Organizer',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      story:
        'Runs a small pet rescue organization, saving strays from the streets. Her shelter has rescued over 100 animals.',
      pets: '100+ Rescues',
      badge: '🌟',
      socialImpact: 'Shelter Founder',
    },
    {
      id: 4,
      name: 'Dr. Fahim Rahman',
      role: 'Veterinarian',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      story:
        'Provides free medical care to adopted pets from PawMart. His compassion has healed hundreds of animals.',
      pets: 'Vet Hero',
      badge: '⚕️',
      socialImpact: '200+ Treatments',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div className="py-20 bg-base-100">
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
              Meet Our Pet Heroes
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Amazing people making a difference in pets' lives every single day
          </motion.p>
        </motion.div>

        {/* Heroes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {heroes.map((hero, index) => (
            <motion.div
              key={hero.id}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <motion.div
                  className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 * index,
                    duration: 0.6,
                    type: 'spring',
                  }}
                >
                  {hero.badge}
                </motion.div>
              </div>

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Name and Role on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                    {hero.name}
                  </h3>
                  <p className="text-sm font-medium text-cyan-300 drop-shadow-md">
                    {hero.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                    {hero.pets}
                  </span>
                  <span className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    {hero.socialImpact}
                  </span>
                </div>

                {/* Story */}
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {hero.story}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-linear-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-4">
              Want to Become a Pet Hero ?
            </h3>
            <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
              Join our community of amazing pet lovers and make a real
              difference. Whether you adopt, foster, or volunteer, every action
              counts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer"
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <span>Start Your Journey</span>
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

export default PetHeroes;
