import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <>
      <title>404 - Page Not Found</title>

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-error">404</h1>
          <h2 className="text-4xl font-semibold mt-4 text-info">
            Page Not Found
          </h2>
          <p className="mt-4 mb-8 text-base-content">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="px-6 py-3 rounded-md  font-medium transition-all duration-300 ease-in-out inline-block bg-secondary text-secondary-content"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
