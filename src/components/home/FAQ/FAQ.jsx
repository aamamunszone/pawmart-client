import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Container from '../../common/Container/Container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How does the adoption process work?',
      answer:
        'Our adoption process is simple! Browse available pets, fill out an adoption application, meet your potential pet, and complete the adoption paperwork. We ensure all pets are vaccinated and health-checked before adoption.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      question: 'What are the adoption fees?',
      answer:
        'Adoption fees vary by pet type and age, typically ranging from 2,000 to 5,000 BDT. This fee covers vaccinations, health check-ups, and spay/neuter procedures. Some senior pets have reduced fees.',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      question: 'Do you provide after-adoption support?',
      answer:
        'Absolutely! We offer lifetime support for all adopted pets. Our team is available 24/7 to answer questions, provide care advice, and help with any concerns. We also have a community of pet parents for peer support.',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 4,
      question: "Can I return a pet if it doesn't work out?",
      answer:
        'We want every adoption to be successful! If circumstances change, we accept returns within 30 days. However, we encourage contacting us first to discuss any challenges - often we can help resolve issues with training or behavior support.',
      color: 'from-yellow-400 to-yellow-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
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
              Frequently Asked Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Got questions? We've got answers to help you on your pet adoption
            journey
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={cardVariants}
              className="bg-base-200 rounded-2xl overflow-hidden shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-base-300 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-base-content mb-2">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-base-content/70 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
                <div
                  className={`mt-1 text-2xl bg-linear-to-r ${faq.color} bg-clip-text text-transparent`}
                >
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
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
          <p className="text-base-content/70 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQ;
