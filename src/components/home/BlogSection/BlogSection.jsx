import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Top 10 Tips for First-Time Pet Owners',
      excerpt:
        'Essential advice for welcoming your new furry friend home. Learn about feeding, training, and creating a safe environment.',
      image:
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500',
      category: 'Pet Care',
      date: 'Dec 20, 2024',
      readTime: '5 min read',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: "Understanding Your Cat's Behavior",
      excerpt:
        'Decode what your cat is trying to tell you through their actions. Understanding body language and vocalizations.',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500',
      category: 'Cat Tips',
      date: 'Dec 18, 2024',
      readTime: '4 min read',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      title: 'Best Dog Training Methods',
      excerpt:
        'Positive reinforcement techniques for training your dog effectively. Build a strong bond while teaching essential commands.',
      image:
        'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500',
      category: 'Training',
      date: 'Dec 15, 2024',
      readTime: '6 min read',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 4,
      title: 'Nutrition Guide for Healthy Pets',
      excerpt:
        'What you need to know about feeding your pets right. From portion sizes to nutritional requirements.',
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500',
      category: 'Nutrition',
      date: 'Dec 12, 2024',
      readTime: '5 min read',
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
    <div className="py-20 bg-base-100">
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
              Pet Care Blog
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert tips and guides to help you become the best pet parent
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-base-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <span
                  className={`absolute top-4 left-4 px-3 py-1 bg-linear-to-r ${blog.color} text-white text-xs font-bold rounded-full`}
                >
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-base-content mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-base-content/60">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
};

export default BlogSection;
