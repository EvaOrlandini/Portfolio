import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../../../data/projects";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <section id="projects" className="section">
      <div className="container container--projects">
        <div className="projects__preview">
          <ProjectCard {...selectedProject} />
        </div>

        <div className="projects__selector">
          <h2 className="projects__title heading--h2 title__highlight title__highlight--sm">
            Projects
          </h2>
          <div className="projects__list">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`projects__link animation--move-left ${
                  selectedProject?.id === project.id
                    ? "projects__link--active"
                    : ""
                }`}
              >
                <h4 className="projects__link-title heading--h4">
                  {project.title}
                </h4>
                <div
                  className="projects__link-line"
                  style={{ width: `${project.lineWidth}px` }}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
