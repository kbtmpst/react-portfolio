import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            className="font-oswald text-xl font-bold text-white flex justify-between"
            to={"/react-portfolio/"}
          >
            <img src="./vite.svg" alt="Error" /> Keybi
            <span className="text-cyan-500">.Dev</span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              className=" text-gray-300 hover:text-while transition-colors"
              to={"/react-portfolio/"}
            >
              HOME
            </Link>
            <Link
              className=" text-gray-300 hover:text-while transition-colors"
              to={"/react-portfolio/about"}
            >
              ABOUT
            </Link>
            <Link
              className=" text-gray-300 hover:text-while transition-colors"
              to={"/react-portfolio/projects"}
            >
              PROJECTS
            </Link>

            <Link
              className=" text-gray-300 hover:text-while transition-colors"
              to={"/react-portfolio/contact"}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
