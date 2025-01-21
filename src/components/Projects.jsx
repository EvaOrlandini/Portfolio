import { useState, lazy, Suspense } from 'react';
import { projectsList } from './projects/ProjectsList';
import "../styles/projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectComponent = selectedProject
    ? lazy(() => import(`./projects/${selectedProject.component}.jsx`))
    : null;

  return (
    <section id="projects" className="mx-32 max-md:mx-10 mb-36 max-md:mb-20 flex flex-row max-md:flex-col-reverse max-md:justify-end">
      <div className="w-8/12 max-md:w-full max-md:mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out dark:bg-background dark:border-[1px] dark:border-text-dark">
          <Suspense fallback={<div className="text-center">Chargement...</div>}>
            {selectedProject ? (
              <ProjectComponent />
            ) : (
              <div className="text-center text-gray-500">
                Sélectionnez un projet pour voir les détails
              </div>
            )}
          </Suspense>
        </div>
      </div>
      <div className="w-4/12 max-md:w-full text-right">
        <h2 className="highlight-text-small text-black text-4xl font-bold mb-10 dark:text-text-dark">Projects</h2>
        <div className="flex flex-col gap-4">
          {projectsList.map((project) => (
            <a
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`project text-right flex flex-row justify-end items-center text-black hover:text-black ${
                selectedProject?.id === project.id
                  ? 'text-black bg-transparent'
                  : 'bg-transparent'
              }`}
            >
              <h3 className="pr-6 text-lg dark:text-text-dark">{project.title}</h3>
              <div
                className='h-[1.5px] bg-black dark:bg-text-dark'
                style={{ width: `${project.width}px` }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
