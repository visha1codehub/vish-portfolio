// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
    { to: "/blog", text: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl font-bold text-accent hover:text-opacity-80 transition-all duration-200 animate-fade-in-scale"
          >
            Vish Gupta
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group animate-fade-in-up ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-muted hover:text-accent hover:bg-opacity-10 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.text}</span>
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </NavLink>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn btn-primary ml-4 text-sm px-6 py-2 animate-gentle-bounce"
              style={{ animationDelay: '0.8s' }}
            >
              Hire Me
            </Link>

            <div className="ml-4">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2.5 h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-5 h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                ></span>
              </div>

            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-full opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="card mx-4 my-4 p-6 animate-fade-in-scale">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-muted hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`
                }
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isOpen ? 'slide-in-right 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.text}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full justify-center text-base py-3"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: -1 }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;