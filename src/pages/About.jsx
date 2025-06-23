import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import vishalProfile from "../assets/images/vishal_profile.png"; // Adjust path based on file location

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
  const bioRef = useIntersectionObserver();
  const skillsRef = useIntersectionObserver();
  const experienceRef = useIntersectionObserver();
  const educationRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Bio Section */}
      <section data-animate ref={bioRef}>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 animate-slide-up">
          About Me
        </h1>
        <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          I'm a passionate developer with a knack for building user-friendly, high-performance web applications. With a focus on modern technologies and clean design, I strive to create impactful solutions that make a difference.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex justify-center">
            <img
              src={vishalProfile}
              alt="Vishal"
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg border-4 border-[var(--color-lightPrimary)] dark:border-[var(--color-darkSecondary)] animate-scale-in"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 animate-slide-up">My Journey</h2>
            <p className="text-muted mb-4 animate-fade-in">
              With over 3 years of experience in web development, I specialize in crafting seamless user experiences using React, Node.js, and Tailwind CSS. My journey began with a curiosity for coding, which evolved into a passion for solving real-world problems through technology. Whether it's building scalable applications or designing intuitive interfaces, I’m driven by a commitment to excellence.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block px-6 py-2 w-max rounded-full hover:scale-105 transition-transform animate-pulse"
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section data-animate ref={skillsRef} className="p-16  bg-gray-50 dark:bg-[#161b22]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-slide-up">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="card p-6 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{skill.icon}</span>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section data-animate ref={experienceRef} className="py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-slide-up">
          Experience
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted font-medium">{exp.company} | {exp.period}</p>
              <p className="text-muted mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section data-animate ref={educationRef} className="py-16 bg-gray-50 dark:bg-[#161b22]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-slide-up">
          Education & Certifications
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted font-medium">{edu.institution} | {edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section data-animate ref={ctaRef} className="py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-up">
          Let’s Work Together
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8 animate-fade-in">
          Interested in collaborating on a project or learning more about my work? Reach out to discuss your ideas!
        </p>
        <Link
          to="/contact"
          className="btn-primary px-8 py-3 text-lg inline-block rounded-full hover:scale-105 transition-transform animate-pulse"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default About;