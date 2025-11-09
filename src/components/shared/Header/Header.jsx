import React from 'react';
import Container from '../../common/Container/Container';
import { Link } from 'react-router';
import NavItem from './NavItem/NavItem';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

const Header = () => {
  const navLinks = (
    <>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/shop">Pets & Supplies</NavItem>
      <NavItem to="/services">Services</NavItem>
      {/* {user && (
        <>
          <NavItem to="/listings/create">Add Listing</NavItem>
          <NavItem to="/listings/user">My Listings</NavItem>
          <NavItem to="/orders/user">My Orders</NavItem>
        </>
      )} */}
    </>
  );

  return (
    <div className="shadow-md">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3.5 w-52 p-2 gap-1 shadow-md"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider leading-relaxed"
          >
            PawMart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2.5">
          <ThemeToggleButton className="mr-1 md:mr-1.5 lg:mr-2" />
          <Link className="px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out bg-secondary text-secondary-content">
            Login
          </Link>
          <Link className="hidden md:inline-block px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out bg-accent text-accent-content">
            Get Started
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
