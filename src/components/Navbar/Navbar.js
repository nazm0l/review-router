import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-indigo-100 py-2">
      <ul className="flex justify-center font-bold">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to='/'>
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/reviews">
            Reviews
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/blogs">
            Blogs
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
