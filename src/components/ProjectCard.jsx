const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => {
  return (
    <div className="card hover:-translate-y-1 animate-scale-in">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[var(--color-darkBorder)] rounded-full text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="link">
              Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="link">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;