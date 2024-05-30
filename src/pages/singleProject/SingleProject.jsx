import BriefProject from "../../components/briefProject/BriefProject";
import EndSection from "../../components/endSection/EndSection";
import "./SingleProgect.css";
// import bac from "../../assats/bac.png";
// import CardUnit from "../../components/cardUnit/CardUnit";
import UnitsComponent from "../../components/unitscomponent/UnitsComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import ba from "../../assats/logo2.png";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";

export default function SingleProject() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
  const [serverUrl] = useRecoilState($ServerUrl);
  const projectId = window.location.pathname.split("/").slice(-1)[0];
  const [units, setUnits] = useState([]);
  
  function getAllUnits() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/units`;
    axios
      .get(server, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        let Res = res.data;
        // console.log(Res.data);
        // console.log(projectId);
        setUnits(Res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    scrollToTop();
    getAllUnits();
  }, []);

  return (
    <>
      <BriefProject />
      <div className="container-filter-projects-page"></div>
      <div className="container-unis-project container">
        {units.map((unit, index) =>
          unit.unit_project_id == projectId ?
            <div className="card2-projects-page" key={index}>
              <div
                className="container-image-project"
                style={{ backgroundImage: `url(${ba})` }}
              >
                <img
                  src={`${serverUrl}/media/units/${unit.unit_id}/${unit.unit_cover_name}`}
                  alt="project image"
                  className="project-image-card2"
                />
              </div>
              <div className="container-ditalse-projects-card">
                <div className="container-project-name-card2">
                  <h1 className="title-project-card2">{unit.unit_name}</h1>
                </div>
                <div className="price-project-card2 display-card2">
                  <p className="color-text price-no">
                    <span className="price-item"> رس </span> <span>{unit.unit_price}</span>
                  </p>
                  <p className="color-text">السعر</p>
                </div>
                <div className="space-project-card2 display-card2">
                  <p className="color-text price-no">
                    <span className="price-item">م</span> <span>{unit.unit_area}</span>
                  </p>
                  <p className="color-text">المساحات</p>
                </div>
                <div className="roms-project-card2 display-card2">
                  <p className="color-text price-no">
                    <span className="price-item"> {unit.unit_rooms_no} </span> <span>تبدأ من </span>
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

              <Link to={`/unit/${unit.unit_id}`}>
                <button className="btn-project-card2">تفاصيل</button>
              </Link>

            </div>
            : null
        )}

      </div>
      {/* <UnitsComponent unit={units}/> */}
      <EndSection
        margin={true}
        headerText={"ارتق بأهدافك للمستوى التالي "}
        lineTow={"هالحين"}
        desc={"ختر التميز في العقارات"}
      />
    </>
  );
}
