import { useEffect, useState } from "react";
import "./CardProject.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
export default function CardProject(props) {
  let projectStyle = {
    width: "95%",
    height: "550px",
  };
  const [serverUrl] = useRecoilState($ServerUrl);
  const [projects, setProjects] = useState([]);
  function userLogin(userEmail, userPassword) {
    let server = `${serverUrl}/index.php/api/auth/login`;
    axios
      .post(server, {
        user_email: userEmail,
        user_password: userPassword,
      })
      .then((res) => {
        let Res = res.data;
        console.log(Res);
        // Save Token into localStorage of sessionStorage
        if (Res.error == false) {
          let Token = Res.data["user_token"];
          sessionStorage.setItem("user_token", Token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
        console.log(Res);
        setProjects(Res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    userLogin("a_fattah_m@icloud.com", "Admin@123");
    getAllProjects();
  }, []);

  return (
    <>
      {projects.map((project , index) => (
        <div
          className="project"
          style={props.ProjectStyle && projectStyle}
          key={index}
        >
<img
            src={`${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}`}
            alt="project image"
            className="image-progect"
          />
         <h1 className="title-project">{project.project_name}</h1>
          <p className="desc-project">{project.project_slogan} </p>
          <i className="bi bi-arrow-up-right-circle-fill icon-project"></i>
        </div>
      ))}

      {/* {projects.map((project, index) => (
        <div
          className="project"
          style={props.ProjectStyle && projectStyle}
          key={index}
        >
          <img
            src={`${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}`}
            alt="project image"
            className="image-progect"
          />
          <h1 className="title-project">{project.project_name}</h1>
          <p className="desc-project">{project.project_slogan} </p>
          <i className="bi bi-arrow-up-right-circle-fill icon-project"></i>
        </div>
      ))} */}

      {/* {projects.map((project , index) => 
        
        <div className="project" style={props.ProjectStyle && projectStyle} key={index}>
          <img
            src={`${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}`}
            alt="project image"
            className="image-progect"
          />
          <img
            src={require("../../assats/tab5.jpg")}
            alt=""
            className="image-progect"
          />
          <h1 className="title-project">{project.project_name}</h1>
          <p className="desc-project">{project.project_slogan} </p>
          <i className="bi bi-arrow-up-right-circle-fill icon-project"></i>
        </div>
      )} */}

      {/* <div className="project" style={props.ProjectStyle && projectStyle}>
        <img
          src={require("../../assats/tab5.jpg")}
          alt=""
          className="image-progect"
        />
     
        <h1 className="title-project">الريان</h1>
        <p className="desc-project">
          بتقدم الشركة خدمات تصميم مخصصة للأثاث و تتيح للعملاء
        </p>
        <i className="bi bi-arrow-up-right-circle-fill icon-project"></i>
      </div> */}
    </>
  );
}
