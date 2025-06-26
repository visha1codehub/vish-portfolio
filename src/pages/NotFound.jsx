import { Link } from "react-router-dom";
import useScrollAnimations from "../hooks/useScrollAnimations";

const NotFound = () => {
  useScrollAnimations();

  return (
    <section className="section min-h-[80vh] flex items-center justify-center relative" data-animate>
      <div className="container text-center relative z-10">
        <h1 className="not-found-heading">404</h1>
        <h2 className="font-display text-4xl sm:text-5xl mb-6 animate-fade-in-up">
          Page Not Found
        </h2>
        <p className="text-lg text-muted max-w-lg mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Oops! It seems the page you're looking for doesn't exist or has been moved.
        </p>
        <div data-animate="fade-in-scale" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/"
            className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;