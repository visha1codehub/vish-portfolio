import { Link } from "react-router-dom";
import { FaCode, FaPaintBrush, FaBusinessTime } from "react-icons/fa";
import useScrollAnimations from "../hooks/useScrollAnimations";

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
  useScrollAnimations();

  return (
    <section className="section" data-animate>
      <div className="container">
        <h1 className="font-display text-4xl sm:text-5xl text-center mb-6 animate-fade-in-up">
          My Services
        </h1>
        <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Discover the range of professional services I offer to help you achieve your digital goals, from development to strategic consulting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card text-center"
              data-animate="fade-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mx-auto mb-6 w-12 h-12 text-[var(--color-lightPrimary)] dark:text-[var(--color-darkPrimary)]">
                <service.icon className="w-full h-full" />
              </div>
              <h2 className="font-display text-xl mb-4">{service.name}</h2>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="divider my-12"></div>
        <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/contact"
            className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;