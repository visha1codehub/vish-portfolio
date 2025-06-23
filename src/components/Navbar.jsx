// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
    { to: "/blog", text: "Blog" },
  ];

  return (
    <nav className="navbar fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="text-2xl font-bold link animate-fade-in"
          >
            Vish Gupta
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 animate-fade-in ${
                    isActive
                      ? "bg-[var(--color-lightPrimary)] text-white dark:bg-[var(--color-darkPrimary)] dark:text-[var(--color-darkBg)]"
                      : "text-muted hover:bg-gray-100 dark:hover:bg-[var(--color-darkBorder)]"
                  }`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.text}
              </NavLink>
            ))}
            <DarkModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-muted hover:bg-gray-100 dark:hover:bg-[var(--color-darkBorder)] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[var(--color-darkBg)] shadow-md animate-slide-up">
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md text-base font-semibold ${
                    isActive
                      ? "bg-[var(--color-lightPrimary)] text-white:text-white dark:bg-[var(--color-darkPrimary)] dark:text-[var(--color-darkBg)]"
                      : "text-muted hover:bg-gray-100 dark:hover:bg-[var(--color-darkBorder)]"
                  } transition-colors duration-200`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;