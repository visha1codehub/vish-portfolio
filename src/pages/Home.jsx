import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import shellspaceImage from "../assets/images/shellspace.svg";
import vishchatImage from "../assets/images/vishchat.png";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🧩" },
  { name: "Git", icon: "📚" },
  { name: "GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "Linux", icon: "🐧" },
  { name: "Bash", icon: "🖥️" },
  { name: "C++", icon: "🔩" },
];

const featuredProjects = [
  {
    id: 1,
    title: "ShellSpace",
    description: "A command-line simulator built with React and Node.js, offering an interactive terminal experience for learning CLI commands.",
    image: shellspaceImage,
    tags: ["React", "Node.js", "Tailwind CSS"],
    demoLink: "https://shellspace.example.com",
    codeLink: "https://github.com/vish-gupta/shellspace",
  },
  {
    id: 2,
    title: "VishChat App",
    description: "A real-time chat application developed with Django and WebSocket, featuring group chats and notifications.",
    image: vishchatImage,
    tags: ["Django", "WebSocket", "Python"],
    demoLink: "https://vishchat.example.com",
    codeLink: "https://github.com/vish-gupta/vishchat",
  },
];

const testimonials = [
  {
    quote: "Vish Gupta delivered an outstanding project with exceptional attention to detail.",
    author: "John Doe, CEO of Company",
  },
  {
    quote: "Working with Vish Gupta was a pleasure; the results exceeded our expectations.",
    author: "Jane Smith, Product Manager",
  },
];

const Home = () => {
  const introRef = useIntersectionObserver();
  const aboutRef = useIntersectionObserver();
  const skillsRef = useIntersectionObserver();
  const projectsRef = useIntersectionObserver();
  const testimonialsRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  return (
    <div className="overflow-hidden">
      {/* Intro Section (Above the Fold) */}
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--color-lightBg)] to-gray-100 dark:from-[var(--color-darkBg)] dark:to-[#1c252f] py-20"
        data-animate
        ref={introRef}
      >
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="text-[var(--color-lightPrimary)] dark:text-[var(--color-darkSecondary)]">Vish Gupta</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-8 animate-fade-in">
            A Full-Stack Developer crafting innovative, user-focused web solutions with React, Django, and more.
          </p>
          <div className="flex justify-center gap-4 animate-scale-in">
            <Link
              to="/contact"
              className="btn-primary px-8 py-3 text-lg rounded-full hover:scale-105 transition-transform animate-pulse"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="link px-8 py-3 text-lg font-semibold border border-[var(--color-lightPrimary)] dark:border-[var(--color-darkSecondary)] rounded-full hover:bg-gray-100 dark:hover:bg-[var(--color-darkBorder)] transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-animate
        ref={aboutRef}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 animate-slide-up">
          About Me
        </h2>
        <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          I'm a passionate developer with expertise in building scalable web applications using modern technologies like React, Django, and Node.js. My goal is to create impactful solutions that enhance user experiences and drive business success.
        </p>
        <div className="text-center">
          <Link
            to="/about"
            className="link font-medium text-lg hover:underline animate-fade-in"
          >
            Learn More About My Journey
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="py-20 bg-gray-50 dark:bg-[#161b22] max-w-full"
        data-animate
        ref={skillsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-slide-up">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-3xl mb-4 block">{skill.icon}</span>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-animate
        ref={projectsRef}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-slide-up">
          Featured Projects
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {featuredProjects.map((project, index) => (
    <div
      key={project.id}
      className="card overflow-hidden animate-scale-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto max-h-64 object-contain"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[var(--color-darkBorder)] rounded-full text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.demoLink} className="link font-medium" target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
          {project.codeLink && (
            <a href={project.codeLink} className="link font-medium" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
        <div className="text-center mt-12 animate-fade-in">
          <Link
            to="/projects"
            className="btn-primary inline-block px-8 py-3 text-lg rounded-full hover:scale-105 transition-transform"
          >
            See All Projects
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 bg-gray-50 dark:bg-[#161b22] max-w-full"
        data-animate
        ref={testimonialsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-slide-up">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-8 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-lg italic text-muted mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-animate
        ref={ctaRef}
      >
        <div className="text-center bg-gradient-to-r from-[var(--color-lightPrimary)] to-[#2563eb] dark:from-[var(--color-darkBg)] dark:to-[#1c252f] rounded-xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-slide-up">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Let’s build something amazing together. Contact me to discuss your project ideas!
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block px-8 py-3 text-lg rounded-full animate-pulse hover:scale-105 transition-transform"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;