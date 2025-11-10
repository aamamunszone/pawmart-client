import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24">
        <div className="absolute w-full h-full rounded-full border-4 md:border-5 lg:border-6 border-blue-200"></div>
        <div className="absolute w-full h-full rounded-full border-t-4 md:border-t-5 lg:border-t-6 border-blue-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
