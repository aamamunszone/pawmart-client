import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto w-[90%] ${className}`}>{children}</div>
  );
};

export default Container;
