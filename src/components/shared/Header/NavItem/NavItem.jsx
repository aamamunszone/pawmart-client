import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({ to, children, className = '' }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-3 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out ${
            isActive
              ? 'bg-[tomato] text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          } ${className}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
