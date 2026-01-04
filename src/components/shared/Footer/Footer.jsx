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
      url: 'https://www.facebook.com/aamamunszone',
      color: 'hover:text-blue-500',
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      url: 'https://x.com/aamamunszone',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/aamamunszone',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/aamamunszone',
      color: 'hover:text-blue-600',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/@aamamunszone',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <Container className="relative z-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🐾</span>
              <h3 className="text-2xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PawMart
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              PawMart connects local pet owners and buyers for adoption and pet
              care products. Give every pet the love and care they deserve.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h6>
            <div className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Categories */}
          <nav>
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Categories
            </h6>
            <div className="flex flex-col gap-3">
              {footerLinks.categories.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Legal + Contact */}
          <nav>
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Legal
            </h6>
            <div className="flex flex-col gap-3 mb-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Email: support@pawmart.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
          </nav>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated
            </h6>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get latest updates and exclusive offers!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 outline-none transition-all backdrop-blur-sm text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} PawMart. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
