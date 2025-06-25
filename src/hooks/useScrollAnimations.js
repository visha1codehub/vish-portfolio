// useScrollAnimations.js
import { useEffect } from "react";

const useScrollAnimations = (options = { threshold: 0.1 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [options]);
};

export default useScrollAnimations;
