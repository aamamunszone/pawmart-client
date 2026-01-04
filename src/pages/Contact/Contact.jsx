import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { useState } from 'react';
import Container from '../../components/common/Container/Container';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      id: 1,
      icon: FaPhone,
      title: 'Phone',
      description: 'Call us anytime',
      info: '+880 1234-567890',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      icon: FaEnvelope,
      title: 'Email',
      description: 'Send us a message',
      info: 'contact@pawmart.com',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: 'Address',
      description: 'Visit our store',
      info: 'Dhaka, Bangladesh',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 4,
      icon: FaClock,
      title: 'Working Hours',
      description: 'Open 7 days a week',
      info: '9:00 AM - 9:00 PM',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 5,
      icon: FaFacebook,
      title: 'Facebook',
      description: 'Follow us on Facebook',
      info: '@PawMartBD',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 6,
      icon: FaInstagram,
      title: 'Instagram',
      description: 'Follow our journey',
      info: '@pawmart_bd',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 7,
      icon: FaTwitter,
      title: 'Twitter',
      description: 'Get updates',
      info: '@PawMartBD',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      id: 8,
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Chat with us',
      info: '+880 1234-567890',
      color: 'from-cyan-400 to-cyan-600',
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <>
      <title>PawMart | Contact Us</title>

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
              📞
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We're here to help! Reach out to us through any channel
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

        {/* Contact Info Grid */}
        <Container className="py-12 -mt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-base-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon Header */}
                <div
                  className={`h-32 bg-linear-to-br ${info.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <info.icon className="text-6xl text-white drop-shadow-lg" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-base-content/60 text-xs mb-2">
                    {info.description}
                  </p>
                  <p className="text-base-content/70 text-sm font-semibold">
                    {info.info}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-base-200 rounded-2xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-base-content mb-4 text-center">
              Send Us a Message
            </h2>
            <p className="text-base-content/70 text-center mb-8 max-w-2xl mx-auto">
              Have a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base-content font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-base-100 border-2 border-base-300 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-base-content font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-base-100 border-2 border-base-300 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base-content font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-base-100 border-2 border-base-300 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-base-content font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-base-100 border-2 border-base-300 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base-content font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-base-100 border-2 border-base-300 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn btn-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white border-0 hover:from-blue-700 hover:to-cyan-600"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </Container>

        {/* CTA Section */}
        <Container className="py-12">
          <motion.div
            className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to help you with any
              questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.open('tel:+8801234567890')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-lg bg-white text-blue-600 hover:bg-white/90 border-0 gap-2"
              >
                <FaPhone />
                Call Now
              </motion.button>
              <motion.button
                onClick={() => window.open('https://wa.me/8801234567890')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-blue-600 gap-2"
              >
                <FaWhatsapp />
                WhatsApp Us
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

export default Contact;
