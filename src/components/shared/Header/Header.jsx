import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import Container from '../../common/Container/Container';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import useAuth from '../../../hooks/useAuth';
import Loader from '../../common/Loader/Loader';
import NavItem from './NavItem/NavItem';
import logo from '../../../assets/logos/logo.png';

const Header = () => {
  const { user, loading, signOutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  if (loading) return <Loader />;

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success('Successfully logged out! 👋'))
      .catch(() => toast.error('Logout failed. Please try again.'));
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { path: '/home', label: 'Home', public: true },
    { path: '/shop', label: 'Pets & Supplies', public: true },
    {
      path: '/services',
      label: 'Services',
      public: true,
    },
    {
      path: '/about-us',
      label: 'About Us',
      public: true,
    },
    {
      path: '/contact',
      label: 'Contact',
      public: true,
    },
    {
      path: '/dashboard',
      label: 'Dashboard',
      private: true,
    },
  ];

  const filteredNavItems = navItems.filter(
    (item) => item.public || (item.private && user)
  );

  return (
    <>
      <Container className="bg-base-100/70 backdrop-blur-sm rounded-b-4xl md:rounded-b-full px-3 md:px-8 lg:px-16 w-full z-50 relative">
        <nav className="navbar py-3">
          {/* Logo */}
          <div className="navbar-start">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 p-1.5 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                <img
                  src={logo}
                  alt="PawMart Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                PawMart
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4">
              {filteredNavItems.map(({ path, label }) => (
                <NavItem key={path} to={path}>
                  <div>
                    <span>{label}</span>
                  </div>
                </NavItem>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end gap-3">
            <ThemeToggleButton />

            {user ? (
              <div className="hidden lg:flex items-center gap-3">
                {/* Profile Avatar */}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary transition-all duration-300"
                  >
                    <div
                      className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      title={user?.displayName}
                    >
                      <img
                        src={user?.photoURL}
                        alt={user?.displayName}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-xl mt-4 border border-base-300"
                  >
                    <li className="menu-title px-4 py-2">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt={user?.displayName} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm truncate">
                            {user?.displayName}
                          </p>
                          <p className="text-xs text-base-content/60 truncate">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </li>
                    <div className="divider my-1"></div>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleSignOut}
                  className="bg-warning text-warning-content px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out flex justify-between items-center gap-2 cursor-pointer"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  to="/auth/login"
                  className="bg-info text-info-content px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out flex justify-between items-center gap-2"
                >
                  <FaUser /> Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-success text-success-content px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out whitespace-nowrap"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-6 h-0.5 bg-current block mb-1.5"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-current block mb-1.5"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-6 h-0.5 bg-current block"
                />
              </motion.div>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-base-100 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-base-300">
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="PawMart"
                    className="w-10 h-10 rounded-full"
                  />
                  <h2 className="text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    PawMart
                  </h2>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="btn btn-ghost btn-sm btn-circle"
                >
                  ✕
                </button>
              </div>

              {user && (
                <div className="p-6 bg-linear-to-br from-primary/10 to-secondary/10">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt={user?.displayName} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold truncate">{user?.displayName}</p>
                      <p className="text-sm text-base-content/60 truncate">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4">
                <ul className="menu gap-2">
                  {filteredNavItems.map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          location.pathname === path
                            ? 'bg-linear-to-r from-primary to-secondary text-white'
                            : 'hover:bg-base-200'
                        }`}
                      >
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border-t border-base-300">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn btn-warning btn-block gap-2"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/auth/login"
                      onClick={closeMobileMenu}
                      className="btn btn-info btn-block gap-2"
                    >
                      <FaUser /> Login
                    </Link>
                    <Link
                      to="/auth/register"
                      onClick={closeMobileMenu}
                      className="btn btn-success btn-block whitespace-nowrap"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
