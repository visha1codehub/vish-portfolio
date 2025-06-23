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
    <footer className="bg-gray-900 dark:bg-[var(--color-darkBg)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 animate-fade-in">Vish Gupta</h2>
            <p className="text-muted text-sm">
              Passionate developer crafting innovative web solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 animate-slide-up">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-center space-x-2 text-muted hover:text-[var(--color-lightPrimary)] dark:hover:text-[var(--color-darkSecondary)] transition-colors"
              >
                <HiOutlineMail className="w-5 h-5" />
                <span>vishalgupta10.dev@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 text-muted hover:text-[var(--color-lightPrimary)] dark:hover:text-[var(--color-darkSecondary)] transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>+91 9695077615</span>
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 animate-slide-up">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-[var(--color-lightPrimary)] dark:hover:text-[var(--color-darkSecondary)] transition-transform hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--color-darkBorder)] pt-6 text-center">
          <p className="text-sm text-muted animate-fade-in">
            © {new Date().getFullYear()} Vish Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
