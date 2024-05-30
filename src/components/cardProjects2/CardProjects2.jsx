import { useEffect, useState } from "react";
import "./CardProjects2.css";
import axios from "axios";
import ba from "../../assats/logo2.png";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
export default function CardProjects2() {
  const [serverUrl] = useRecoilState($ServerUrl);
  let [projects, setProjects] = useState([]);
  // let [area, setArea] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
        // console.log(Res.data);
        setProjects(Res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function getAllUnits() {
  //   let Token = sessionStorage.getItem("user_token");
  //   let server = `${serverUrl}/index.php/api/units`;
  //   axios
  //     .get(
  //       server,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${Token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       let Res = res.data;
  //       console.log(Res);
  //       setArea(Res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  useEffect(() => {
    getAllProjects();
    // getAllUnits();
  }, []);

  const project_per_page = 3;
  const pages = Math.ceil(projects.length / project_per_page);
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }
  const startIndex = (currentPage - 1) * project_per_page;
  const finishIndex = (currentPage + 1) * project_per_page;
  const orderProjects = projects.slice(startIndex, finishIndex);


// -------------low area project function ---------------


  return (
    <>
      {orderProjects.map((project, index) => (
        <div className="card2-projects-page" key={index}>
          <div
            className="container-image-project"
            style={{ backgroundImage: `url(${ba})` }}
          >
      
            <img
              src={`${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}`}
              alt="project image"
              className="project-image-card2"
            />
          </div>
          <div className="container-ditalse-projects-card">
            <div className="container-project-name-card2">
              <h1 className="title-project-card2">{project.project_name}</h1>
            </div>
            <div className="price-project-card2 display-card2">
              <p className="color-text price-no">
                <span className="price-item"> رس </span> <span>7676  <span className="price-item"> تبدأ من </span></span> 
              </p>
              <p className="color-text">السعر</p>
            </div>
            <div className="space-project-card2 display-card2">
              <p className="color-text price-no">
                <span className="price-item">م</span> <span>245 - 325</span>
              </p>
              <p className="color-text">المساحات</p>
            </div>
            <div className="roms-project-card2 display-card2">
              <p className="color-text price-no">
                <span className="price-item"> 3 </span> <span>تبدأ من </span>
              </p>
              <p className="color-text">الغرف</p>
            </div>
            <div className="features-project-card2 display-card2">
              <p className="color-text price-no">
                <span className="price-item">توفر</span>
              </p>
              <p className="color-text">مميزات</p>
            </div>
          </div>
          <Link to={`/project/${project.project_id}`}>
            <button className="btn-project-card2">تفاصيل</button>
          </Link>
        </div>
      ))}



















      {/* -------------pagination-------------- */}
      <div className="pag">
        {generatedPages.map((item, index) => (
          <div
            className={
              currentPage === item
                ? "pagenation-container activated"
                : "pagenation-container"
            }
            onClick={() => setCurrentPage(item)}
            key={index}
          >
            <h3 key={index}>{item}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
