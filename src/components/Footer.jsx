// src/components/Footer.jsx
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: FaGithub },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  ];

  return (
    <footer className="section bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left" data-animate>
            <h2 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Vish Gupta
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Passionate developer crafting innovative web solutions with modern technologies and best practices.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center" data-animate>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:vishalgupta10.dev@gmail.com"
                className="link flex items-center justify-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <HiOutlineMail className="w-4 h-4 flex-shrink-0" />
                <span>vishalgupta10.dev@gmail.com</span>
              </a>
              <a
                href="tel:+919695077615"
                className="link flex items-center justify-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                <span>+91 9695077615</span>
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-right" data-animate>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" p-2 w-10 h-10 flex items-center justify-center rounded-lg hover:scale-105 transition-transform duration-200"
                    aria-label={`Visit my ${link.name} profile`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-8"></div>

        {/* Copyright Section */}
        <div className="text-center" data-animate>
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Vish Gupta. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;