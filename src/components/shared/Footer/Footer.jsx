import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Container from '../../common/Container/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Pets & Supplies', path: '/shop' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Refund Policy', path: '/refund' },
    ],
    categories: [
      { name: 'Pets Adoption', path: '/category-filtered-product/Pets' },
      { name: 'Pet Food', path: '/category-filtered-product/Food' },
      { name: 'Accessories', path: '/category-filtered-product/Accessories' },
      {
        name: 'Care Products',
        path: '/category-filtered-product/Care Products',
      },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com',
      color: 'hover:text-blue-500',
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      url: 'https://twitter.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <Container className="py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-5xl">🐾</span>
              <span className="text-3xl font-black bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                PawMart
              </span>
            </Link>
            <p className="text-neutral-content/80 mb-4 text-sm leading-relaxed">
              PawMart connects local pet owners and buyers for adoption and pet
              care products. Give every pet the love and care they deserve.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`btn btn-circle btn-ghost text-xl ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-content/80 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-content/80 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-content/80 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-neutral-content/80">
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@pawmart.com
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +880 1234-567890
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider my-8"></div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-content/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>
            &copy; {currentYear}{' '}
            <span className="font-semibold text-primary">PawMart</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/terms"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms
            </Link>
            <span>•</span>
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Decorative Top Wave */}
      <div className="absolute bottom-full left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 60L60 54C120 48 240 36 360 32C480 28 600 32 720 34C840 36 960 36 1080 32C1200 28 1320 20 1380 16L1440 12V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            className="fill-neutral"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
