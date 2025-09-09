import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 lft-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <Link
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
                `}
        onClick={() => setMenuOpen(false)}
        to="/"
      >
        HOME
      </Link>
      <Link
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
                `}
        onClick={() => setMenuOpen(false)}
        to="/about"
      >
        ABOUT
      </Link>
      <Link
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
                `}
        onClick={() => setMenuOpen(false)}
        to="projects"
      >
        PROJECTS
      </Link>
      <Link
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
                `}
        onClick={() => setMenuOpen(false)}
        to="contact"
      >
        CONTACT
      </Link>
    </div>
  );
}

export default MobileMenu;
