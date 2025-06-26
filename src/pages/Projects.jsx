import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import useScrollAnimations from "../hooks/useScrollAnimations";

const projects = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web app with React, Tailwind CSS, and Firebase for real-time product management and secure payments.",
    image: "/images/project1.jpg",
    tags: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: "project2",
    title: "Task Management Dashboard",
    description:
      "A responsive dashboard for task tracking, built with Next.js, TypeScript, and MongoDB, featuring drag-and-drop functionality.",
    image: "/images/project2.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "React-DnD"],
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: "project3",
    title: "Portfolio Website",
    description:
      "A modern portfolio showcasing my work, built with Vite, React, and Tailwind CSS v4, with a GitHub-inspired dark mode.",
    image: "/images/project3.jpg",
    tags: ["Vite", "React", "Tailwind CSS", "Animation"],
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: "project4",
    title: "Blog Platform",
    description:
      "A dynamic blog platform with content management using Contentful, styled with Tailwind CSS, and deployed on Vercel.",
    image: "/images/project4.jpg",
    tags: ["React", "Contentful", "Tailwind CSS", "Vercel"],
    demoLink: "https://example.com",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  useScrollAnimations();

  // Generate unique tags dynamically
  const uniqueTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.tags.includes(filter));

  return (
    <section className="section" data-animate>
      <div className="container">
        <h1 className="font-display text-4xl sm:text-5xl text-center mb-6 animate-fade-in-up">
          My Projects
        </h1>
        <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Explore a collection of my work, showcasing innovative web applications built with modern technologies.
        </p>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {uniqueTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`btn ${filter === tag ? 'btn-primary' : 'btn-secondary'} text-sm px-4 py-2`}
              data-animate="fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-animate="fade-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted col-span-full">
              No projects found for this filter.
            </p>
          )}
        </div>
        {/* Divider */}
        <div className="divider my-12"></div>
        {/* CTA */}
        <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/contact"
            className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
          >
            Let’s Build Something Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;