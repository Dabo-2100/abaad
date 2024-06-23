import { useContext, useEffect, useState } from "react";
import "./ProjectsTable.scss";
import axios from "axios";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../../store";
import noImg from "../../../assats/noImgPro.png";
import MediaModal from "./MediaModal";
import { ProjectsContext } from "./ProjectsContext";
export default function ProjectsTable() {
  // const [serverUrl] = useState("https://easetasks.com/abaad");
  const [serverUrl] = useRecoilState($ServerUrl);
  const [projects, setProjects] = useState([]);
  const { mediaModal, openMediaModal } = useContext(ProjectsContext);
  function getAllProjects() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects`;
    axios
      .get(server, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (!res.data.err) {
          setProjects(res.data.data);
        } else {
          setProjects([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllProjects();
  }, []);
  return (
    <>
      {mediaModal.index ? <MediaModal /> : null}
      <div
        id="project-table"
        className="container my-5 d-flex flex-column align-items-end"
      >
        <button className="btn btn-add mb-5">أضف مشروع جديد</button>
        <h1 className="title mb-3"> المشاريع</h1>
        <table className="table table-dark table-striped table-style">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">اسم المشروع</th>
              <th scope="col">صورة الغلاف</th>
              <th scope="col">الحي</th>
              <th scope="col">عدد المبانى</th>
              <th scope="col">عدد الوحدات</th>
              <th scope="col">عدد الوحدات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{project.project_name}</td>
                  <td>
                    <img
                      onClick={openMediaModal}
                      alt="project image"
                      className="img-project"
                      src={
                        project.project_cover_name
                          ? `${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}`
                          : noImg
                      }
                    />
                  </td>
                  <td>
                    <input defaultValue={project.project_bulding_no} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
