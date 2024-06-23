import BriefProject from "../../components/briefProject/BriefProject";
import EndSection from "../../components/endSection/EndSection";
import "./SingleProgect.css";
// import bac from "../../assats/bac.png";
// import CardUnit from "../../components/cardUnit/CardUnit";
import UnitsComponent from "../../components/unitscomponent/UnitsComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import ba from "../../assats/logo2.png";
import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";

export default function SingleProject() {
  const [serverUrl] = useRecoilState($ServerUrl);
  const parms = useParams();
  const projectId = parms.projectId;
  const [units, setUnits] = useState([]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }

  function getAllUnits() {
    let server = `${serverUrl}/projects/${projectId}`;
    axios
      .get(server, {
        params: {
          populate: {
            project_units: {
              populate: "*",
            },
          },
        },
      })
      .then((res) => {
        setUnits(res.data.data.attributes.project_units.data);
      })
      .catch((err) => {
        // console.log(err);
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
        {units.map((unit, index) => (
          <div className="card2-projects-page" key={index}>
            <div
              className="container-image-project"
              style={{ backgroundImage: `url(${ba})` }}
            >
              <img
                src={`${
                  unit.attributes.unit_cover_photo.data
                    ? serverUrl.includes("localhost")
                      ? serverUrl.split("/api")[0] +
                        unit.attributes.unit_cover_photo.data.attributes.url
                      : unit.attributes.unit_cover_photo.data.attributes.url
                    : null
                }`}
                // alt="project image"
                className="project-image-card2"
              />
            </div>
            <div className="container-ditalse-projects-card">
              <div className="container-project-name-card2">
                <h1 className="title-project-card2">
                  {unit.attributes.unit_name}
                </h1>
              </div>
              <div className="price-project-card2 display-card2">
                <p className="color-text price-no">
                  <span className="price-item"> رس </span>{" "}
                  <span>{unit.attributes.unit_price}</span>
                </p>
                <p className="color-text">السعر</p>
              </div>
              <div className="space-project-card2 display-card2">
                <p className="color-text price-no">
                  <span className="price-item">م</span>{" "}
                  <span>{unit.attributes.unit_area}</span>
                </p>
                <p className="color-text">المساحة</p>
              </div>
              <div className="roms-project-card2 display-card2">
                <p className="color-text price-no">
                  <span className="price-item">
                    {" "}
                    {unit.attributes.unit_rooms_no}{" "}
                  </span>{" "}
                  <span>تبدأ من </span>
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
            <Link to={`/unit/${unit.id}`}>
              <button className="btn-project-card2">تفاصيل</button>
            </Link>
          </div>
        ))}
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
