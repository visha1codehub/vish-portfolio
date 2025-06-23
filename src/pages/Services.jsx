// src/pages/Services.jsx
import useIntersectionObserver  from "../hooks/useIntersectionObserver";
import { FaCode, FaPaintBrush, FaBusinessTime } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Web Development",
    description:
      "Build custom, high-performance web applications using modern frameworks like React, Next.js, and Node.js, tailored to your business needs.",
    icon: FaCode,
  },
  {
    name: "UI/UX Design",
    description:
      "Craft intuitive, visually appealing user interfaces with Tailwind CSS and Figma, ensuring seamless user experiences across devices.",
    icon: FaPaintBrush,
  },
  {
    name: "Consulting",
    description:
      "Provide expert guidance on tech strategies, architecture, and scalability to drive your business forward with innovative solutions.",
    icon: FaBusinessTime,
  },
];

const Services = () => {
  const servicesRef = useIntersectionObserver();

  return (
    <section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-animate
      ref={servicesRef}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 animate-slide-up">
        My Services
      </h1>
      <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 animate-fade-in">
        Discover the range of professional services I offer to help you achieve your digital goals, from development to strategic consulting.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="card p-6 text-center hover:-translate-y-2 transition-transform duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="mx-auto mb-4 w-12 h-12 text-[var(--color-lightPrimary)] dark:text-[var(--color-darkSecondary)]">
              <service.icon className="w-full h-full" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-muted text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 animate-fade-in">
        <Link
          to="/contact"
          className="btn-primary px-8 py-3 text-lg inline-block rounded-full hover:scale-105 transition-transform animate-pulse"
        >
          Discuss Your Project
        </Link>
      </div>
    </section>
  );
};

export default Services;