import { createContext, useState } from "react";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [mediaModal, setMediaModal] = useState({
    index: false,
    project_id: null,
  });

  const openMediaModal = (project_id) => {
    setMediaModal({
      index: true,
      project_id: project_id,
    });
  };

  const closeMediaModal = () => {
    setMediaModal({
      index: false,
      project_id: null,
    });
  };

  return (
    <ProjectsContext.Provider
      value={{ mediaModal, openMediaModal, closeMediaModal }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
