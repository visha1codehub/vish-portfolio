import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";
import useScrollAnimations from "../hooks/useScrollAnimations";

const Contact = () => {
  useScrollAnimations();

  return (
    <section className="section" data-animate>
      <div className="container">
        <h1 className="font-display text-4xl sm:text-5xl text-center mb-6 animate-fade-in-up">
          Contact Me
        </h1>
        <p className="text-lg text-muted text-center max-w-lg mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Let's connect! Fill out the form below, and I'll get back to you as soon as possible.
        </p>
        <div className="card max-w-lg mx-auto p-8" data-animate="fade-scale" style={{ animationDelay: "0.4s" }}>
          <ContactForm />
        </div>
        <div className="divider my-12"></div>
        <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted mb-6">
            Prefer another way to reach out? Find me here:
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:vishalgupta10.dev@gmail.com"
              className="social-link"
              aria-label="Email"
              data-animate="fade-in-scale"
              style={{ animationDelay: "0.8s" }}
            >
              <HiOutlineMail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-gupta-466b7921b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              data-animate="fade-in-scale"
              style={{ animationDelay: "0.9s" }}
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/visha1codehub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              data-animate="fade-in-scale"
              style={{ animationDelay: "1.0s" }}
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/VishalG59469500"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="X"
              data-animate="fade-in-scale"
              style={{ animationDelay: "1.1s" }}
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;