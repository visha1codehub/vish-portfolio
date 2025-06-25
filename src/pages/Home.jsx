import { Link } from "react-router-dom";
import useScrollAnimations from "../hooks/useScrollAnimations";
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
  useScrollAnimations();


  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero section min-h-screen flex items-center justify-center relative">
        <div
          className="container text-center animate-fade-in-up"
          data-animate
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6">
            Hi, I'm{" "}
            <span className="text-accent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vish Gupta
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            A Full-Stack Developer crafting innovative, user-focused web solutions
            with React, Django, and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-scale">
            <Link
              to="/contact"
              className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* About Section */}
      <section className="section" data-animate >
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-8">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted mb-12 leading-relaxed">
              I'm a passionate developer with expertise in building scalable web applications
              using modern technologies like React, Django, and Node.js. My goal is to create
              impactful solutions that enhance user experiences and drive business success.
            </p>
            <p className="text-base text-muted mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend development, I bring
              ideas to life through clean, efficient code and thoughtful user interface design.
              I'm committed to continuous learning and staying at the forefront of web development trends.
            </p>
            <Link
              to="/about"
              className="link text-lg font-medium"
            >
              Learn More About My Journey →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Skills Section */}
      <section className="section" data-animate >
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-16">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card text-centertransition-all duration-300 hover:scale-105"
                data-animate="fade-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-gentle-bounce">{skill.icon}</div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted mb-6">
              Always learning and exploring new technologies to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Full-Stack Development", "API Design", "Database Architecture", "DevOps"].map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Featured Projects Section */}
      <section className="section" data-animate >
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="card overflow-hidden group"
                data-animate="fade-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-4">{project.title}</h3>
                  <p className="text-muted mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.demoLink}
                      className="link font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo →
                    </a>
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        className="link font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Testimonials Section */}
      <section className="section" data-animate >
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-16">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-8 relative"
                data-animate="slide-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-6 left-6 text-6xl text-accent opacity-20">"</div>
                <blockquote className="text-lg italic text-muted mb-6 pt-8 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <footer>
                  <p className="font-medium text-accent">{testimonial.author}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Call to Action Section */}
      <section className="section" data-animate >
        <div className="container">
          <div className="card text-center p-16 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl mb-6">
                Ready to Bring Your Ideas to Life?
              </h2>
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to create something extraordinary. Whether you need a
                full-stack web application, API development, or technical consultation,
                I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/about"
                  className="btn btn-secondary text-lg px-8 py-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;