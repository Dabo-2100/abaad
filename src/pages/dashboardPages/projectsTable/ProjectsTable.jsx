import { useEffect, useState } from "react";
import "./ProjectsTable.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../../store";
export default function ProjectsTable() {
  const [serverUrl] = useRecoilState($ServerUrl);
  const [projects, setProjects] = useState([]);
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
        let Res = res.data;
        console.log(Res.data);
        setProjects(Res.data);
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
      <div
        id="project-table"
        className="container my-5 d-flex flex-column align-items-end"
      >
        <button className="btn btn-add mb-5">أضف مشروع جديد</button>
        <h1 className="title mb-3">كل المشاريع</h1>
        <table className="table table-dark table-striped-columns table-style">
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
            {projects.map((project , index) => (
              <tr key={index}>
                {/* <td className="pt-5">{project.project_id}</td> */}
                <td className="pt-5">{project.project_name}</td>
                <td>
                  <img
                    src={`${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}`}
                    alt="project image"
                    className="img-project"
                  />
                  {/* <img
                    src={require("../../../assats/a1.jpg")}
                    alt=""
                    className="img-project"
                  /> */}
                </td>
                <td className="pt-5">الصفا</td>
                <td className="pt-5">23</td>
                <td className="pt-5">222</td>
                <td className=" d-flex flex-column align-items-center">
                  <Link to={`/admin/${project.project_id}`}>
                  <button className="view mb-2  bg-info item-control">عرض</button>
                  </Link>
                  <button className="delete mb-2 bg-danger item-control">حذف</button>
                  <button className="edit mb-4 bg-warning item-control">تعديل</button>
{/*                 
                  <div className="view mb-2  bg-info item-control">عرض</div>
                  <div className="delete mb-2 bg-danger item-control">حذف</div>
                  <div className="edit mb-4 bg-warning item-control">تعديل</div> */}
                </td>
              </tr>
            ))}
            {/* <tr>
              <td className="pt-5">1</td>
              <td className="pt-5">الريان</td>
              <td>
                <img src={require("../../../assats/a1.jpg")} alt="" className="img-project"/>
              </td>
              <td className="pt-5">الصفا</td>
              <td className="pt-5">23</td>
              <td className="pt-5">222</td>
              <td className=" d-flex flex-column align-items-center">
<div className="view mb-2  bg-info item-control">عرض</div>
<div className="delete mb-2 bg-danger item-control">حذف</div>
<div className="edit mb-4 bg-warning item-control">تعديل</div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
