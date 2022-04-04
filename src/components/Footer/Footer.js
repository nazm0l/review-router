import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 mt-20 bg-blue-100 rounded-lg shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
        <span className="text-sm text-blue-500 font-bold text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="hover:underline">
            Nazmul™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
