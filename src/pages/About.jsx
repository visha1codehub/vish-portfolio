import { Link } from "react-router-dom";
import useScrollAnimations from "../hooks/useScrollAnimations";
import vishalProfile from "../assets/images/vishal_profile.png";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "📚" },
  { name: "TypeScript", icon: "🔷" },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Developed responsive web applications using React and Tailwind CSS, improving user engagement by 30%.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    period: "2021 - 2023",
    description: "Contributed to full-stack projects with Node.js and MongoDB, streamlining internal workflows.",
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Example",
    period: "2017 - 2021",
  },
  {
    degree: "Certified React Developer",
    institution: "Online Academy",
    period: "2022",
  },
];

const About = () => {
  useScrollAnimations();

  return (
    <div className="overflow-hidden">
      {/* Hero/Bio Section */}
      <section className="hero section min-h-screen flex items-center justify-center relative" data-animate>
        <div className="container text-center animate-fade-in-up">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            About <span className="text-accent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vish Gupta</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a knack for building user-friendly, high-performance web applications using modern technologies like React, Node.js, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-scale">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce">
              Connect with Me
            </Link>
            <Link to="/projects" className="btn btn-secondary text-lg px-8 py-4">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Journey Section */}
      <section className="section" data-animate>
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-12">My Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="flex justify-center" data-animate="fade-scale">
              <img
                src={vishalProfile}
                alt="Vishal Gupta"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-[var(--color-lightPrimary)] dark:border-[var(--color-darkSecondary)] shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center" data-animate="slide-right">
              <p className="text-lg text-muted mb-6 leading-relaxed">
                With over 3 years of experience in web development, I specialize in crafting seamless user experiences. My journey began with a curiosity for coding, which evolved into a passion for solving real-world problems through technology.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Whether it's building scalable applications or designing intuitive interfaces, I’m driven by a commitment to excellence and continuous learning to stay at the forefront of web development trends.
              </p>
              <Link to="/contact" className="link text-lg font-medium">
                Let’s Collaborate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Skills Section */}
      <section className="section" data-animate>
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-16">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="card text-center"
                data-animate="fade-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl mb-4 block animate-gentle-bounce">{skill.icon}</span>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted mb-6">
              Always exploring new technologies to deliver cutting-edge solutions.
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

      {/* Experience Section */}
      <section className="section" data-animate>
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-16">Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card p-8"
                data-animate="fade-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-display text-xl mb-2">{exp.title}</h3>
                <p className="text-muted font-medium mb-2">{exp.company} | {exp.period}</p>
                <p className="text-muted leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Education Section */}
      <section className="section" data-animate>
        <div className="container">
          <h2 className="font-display text-4xl sm:text-5xl text-center mb-16">Education & Certifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card p-8"
                data-animate="fade-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-display text-xl mb-2">{edu.degree}</h3>
                <p className="text-muted font-medium">{edu.institution} | {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA Section */}
      <section className="section" data-animate>
        <div className="container">
          <div className="card text-center p-16 max-w-4xl mx-auto relative overflow-hidden" data-animate="fade-scale">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl mb-6">
                Let’s Work Together
              </h2>
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Interested in collaborating on a project or learning more about my work? Reach out to discuss your ideas!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce">
                  Get in Touch
                </Link>
                <Link to="/projects" className="btn btn-secondary text-lg px-8 py-4">
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;