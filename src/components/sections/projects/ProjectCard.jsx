import { Github, SquareArrowOutUpRight } from "lucide-react";

export const ProjectCard = ({
  title,
  description1,
  description2,
  video,
  technologies,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className="project__card">
      <div className="card__header">
        <div className="card__header-left">
          <h3 className="project__title heading--h3">{title}</h3>
          <div className="project__badges">
            {technologies.map((tech) => (
              <span key={tech} className="badge badge--sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project__buttons">
          <a
            href={githubUrl}
            className="btn--secondary btn--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href={demoUrl}
            className="btn--primary-full btn--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight />
          </a>
        </div>
      </div>

      <div className="card__content">
        <p className="project__description paragraph paragraph--sm">
          {description1}
        </p>
        <p className="project__description paragraph paragraph--sm">
          {description2}
        </p>
      </div>

      <div className="project__video">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};
