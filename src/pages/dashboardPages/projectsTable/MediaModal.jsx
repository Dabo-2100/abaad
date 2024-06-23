import { useContext, useEffect } from "react";
import { ProjectsContext } from "./ProjectsContext";

export default function MediaModal() {
  const { mediaModal, closeMediaModal } = useContext(ProjectsContext);
  const getProjectDetails = () => {};
  useEffect(() => {
    getProjectDetails();
  }, []);
  return (
    <div
      className="col-12 Modal d-flex align-content-center align-items-center justify-content-center"
      onClick={closeMediaModal}
    >
      <div className="content">
        <h1>Content Will Show Here</h1>
      </div>
    </div>
  );
}
