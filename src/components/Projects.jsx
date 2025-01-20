import { useState, lazy, Suspense } from 'react';
import { projectsList } from './projects/ProjectsList';
import "../styles/projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Chargement dynamique des composants de projet
  const ProjectComponent = selectedProject
    ? lazy(() => import(`./projects/${selectedProject.component}.jsx`))
    : null;

  return (
    <section className="min-h-screen mx-32 flex flex-row">
      <div className="w-8/12">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
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
      <div className="w-4/12 text-right">
        <h2 className="highlight-text-small text-black text-4xl font-bold mb-10">Projects</h2>
        <div className="flex flex-col gap-4">
          {projectsList.map((project) => (
            <a
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`text-right flex flex-row justify-end items-center ${
                selectedProject?.id === project.id
                  ? 'text-black bg-transparent'
                  : 'bg-transparent'
              }`}
            >
              <h3 className="font-medium pr-6 text-lg">{project.title}</h3>
              <div className='h-[1.5px] w-[100px] bg-black'></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
