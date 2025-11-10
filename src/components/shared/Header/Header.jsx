import React from 'react';
import Container from '../../common/Container/Container';
import { Link } from 'react-router';
import NavItem from './NavItem/NavItem';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import useAuth from '../../../hooks/useAuth';
import Loader from '../../common/Loader/Loader';
import toast from 'react-hot-toast';

const Header = () => {
  const { user, loading, signOutUser } = useAuth();

  if (loading) {
    return <Loader />;
  }

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Successfully Logout');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/shop">Pets & Supplies</NavItem>
      <NavItem to="/services">Services</NavItem>
      {user && (
        <>
          <NavItem to="/listings/create">Add Listing</NavItem>
          <NavItem to="/listings/user">My Listings</NavItem>
          <NavItem to="/orders/user">My Orders</NavItem>
        </>
      )}
    </>
  );

  return (
    <Container className="backdrop-blur-md rounded-b-4xl md:rounded-b-full px-1 md:px-5 lg:px-10 w-full">
      <div className="navbar py-2.5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-md z-40 mt-5 w-52 p-2 gap-1 shadow-md"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider leading-relaxed"
          >
            <h1 className="text-2xl font-bold leading-relaxed tracking-wide bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
              PawMart
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggleButton className="mr-1 md:mr-1.5 lg:mr-2" />

          {user ? (
            <div className="flex justify-between items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute w-full h-full rounded-full border-3 border-green-200"></div>
                <div className="absolute w-full h-full rounded-full border-t-2 border-green-600 animate-spin"></div>
                <div className="absolute w-full h-full rounded-full border border-[lime] p-1 overflow-hidden">
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="rounded-full"
                    title={user?.displayName}
                  />
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="px-3 py-1.5 rounded-md font-medium bg-linear-to-br from-[#ee0979] to-[#ff6a00] text-white transition-all duration-200 ease-in-out"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2.5">
              <Link
                to="/auth/login"
                className="px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out bg-secondary text-secondary-content"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="hidden md:inline-block px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out bg-accent text-accent-content"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
