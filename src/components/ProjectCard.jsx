const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => {
  return (
    <div className="card project-card group overflow-hidden" data-animate="fade-scale">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-xl mb-4">{title}</h3>
        <p className="text-muted mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-medium"
            >
              View Demo →
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-medium"
            >
              Source Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;