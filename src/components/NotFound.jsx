import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
    <p className="text-lg text-gray-600 mb-4">
      The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Go back to the home page
    </Link>
  </div>
  );
}

export default NotFound;
