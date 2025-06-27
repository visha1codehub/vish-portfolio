import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useScrollAnimations from "../hooks/useScrollAnimations";

const Footer = () => {
  useScrollAnimations();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/vishalcodehub", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/vishal-gupta-466b7921b", icon: FaLinkedin },
    { name: "X", href: "https://x.com/VishalG59469500", icon: FaXTwitter },
    { name: "Instagram", href: "https://www.instagram.com/vish__10___", icon: FaInstagram }, // Added Instagram
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left" data-animate="fade-in-up">
            <h2 className="footer-heading">Vishal Gupta</h2>
            <p className="footer-text max-w-xs mx-auto md:mx-0">
              B.Tech Computer Science student and Software Engineer Intern at Prutor@IITK, building scalable web applications with ReactJS, Django, and Node.js.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:vishalgupta10.dev@gmail.com"
                className="contact-link justify-center"
              >
                <HiOutlineMail className="w-4 h-4 flex-shrink-0" />
                <span>vishalgupta10.dev@gmail.com</span>
              </a>
              <a
                href="tel:+919695077615"
                className="contact-link justify-center"
              >
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                <span>+91 9695077615</span>
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-right" data-animate="fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="footer-heading">Connect With Me</h3>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit my ${link.name} profile`}
                    data-animate="fade-scale"
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
        <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="footer-text">
            © {new Date().getFullYear()} Vishal Gupta. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;