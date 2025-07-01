import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";
import useScrollAnimations from "../hooks/useScrollAnimations";
import vishchatImage from "../assets/images/vishchat.png";
import shellspaceImageLight from "../assets/images/shellspace-light.svg";
import shellspaceImageDark from "../assets/images/shellspace-dark.svg";
import medicalBlogpostImageLight from "../assets/images/medical-blogpost-light.png";
import medicalBlogpostImageDark from "../assets/images/medical-blogpost-dark.png";
import vishPortfolioImageLight from "../assets/images/vish-portfolio-light.png";
import vishPortfolioImageDark from "../assets/images/vish-portfolio-dark.png";

const projects = [
  {
    id: "project1",
    title: "ShellSpace",
    description:
      "Web-based Linux command simulator with terminal emulation using Xterm.js and Node-pty, Docker containers per session, and real-time Socket.IO communication. Styled with Tailwind CSS v4.",
    image: shellspaceImageDark,
    tags: ["ReactJS", "NodeJS", "Docker", "Socket.IO", "Xterm.js", "Node-pty", "Tailwind CSS"],
    demoLink: "https://shellspace.onrender.com",
    codeLink: "https://github.com/visha1codehub/shellspace",
  },
  {
    id: "project2",
    title: "Personal Portfolio",
    description:
      "Responsive portfolio built with React and Tailwind CSS, deployed on Render. Features project filtering, dark/light themes, and scroll animations.",
    image:  vishPortfolioImageDark,
    tags: ["React", "Vite", "Tailwind CSS", "Render"],
    demoLink: "https://vish10-portfolio.onrender.com",
    codeLink: "https://github.com/visha1codehub/vish-portfolio",
  },
  {
    id: "project3",
    title: "VishChat App",
    description:
      "Real-time chat application using Django Channels and WebSockets with user authentication, messaging, and group chat functionality.",
    image: vishchatImage,
    tags: ["Django", "WebSockets", "HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/visha1codehub/VishChat_App",
  },
  {
    id: "project4",
    title: "Medical Blogpost",
    description:
      "Blogging platform for doctors to post blogs and patients to read and book appointments, integrated with Google Calendar API and Google Auth.",
    image: medicalBlogpostImageDark,
    tags: ["Django", "Google Calendar API", "Google Auth", "HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/visha1codehub/Medical-Blogpost-Project",
  },
];

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  projects[0].image = isDarkMode ? shellspaceImageDark : shellspaceImageLight;
  projects[1].image = isDarkMode ? vishPortfolioImageDark : vishPortfolioImageLight;
  projects[3].image = isDarkMode ? medicalBlogpostImageDark : medicalBlogpostImageLight;
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
            Let's Build Something Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;