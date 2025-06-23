// src/pages/Contact.jsx
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact = () => {
  const contactRef = useIntersectionObserver();

  return (
    <section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-animate
      ref={contactRef}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 animate-slide-up">
        Contact Me
      </h1>
      <p className="text-lg text-muted text-center max-w-lg mx-auto mb-12 animate-fade-in">
        Let's connect! Fill out the form below, and I'll get back to you as soon as possible.
      </p>
      <ContactForm />
      <div className="mt-12 text-center">
        <p className="text-muted mb-4 animate-fade-in">
          Prefer another way to reach out? Find me here:
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:your.email@example.com"
            className="link hover:scale-110 transition-transform"
            aria-label="Email"
          >
            <span className="text-[var(--color-lightPrimary)] dark:text-[var(--color-darkSecondary)]">
              Email
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <span className="text-[var(--color-lightPrimary)] dark:text-[var(--color-darkSecondary)]">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;