import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <img
            src={errorImg}
            alt="404 Error - Page Not Found"
            className="mx-auto max-w-full h-auto w-96"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops, page not found!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for is not available.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
