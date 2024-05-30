import CardProjects2 from "../../components/cardProjects2/CardProjects2";
import ProjectsComponent from "../../components/projectsComponent/ProjectsComponent";
import EndSection from "../../components/endSection/EndSection";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";
import Slider from "../../components/slider/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
export default function Projects() {
  const [serverUrl] = useRecoilState($ServerUrl);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  }
  function getAllUnits() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/units`;
    axios
      .get(
        server,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getAllProjects() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects`;
    axios
      .get(
        server,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    scrollToTop();
    getAllUnits();
    // getAllProjects()
  }, []);
  return (
    <>
      <div className="interface-section-projects-page container">
        <img
          src={require("../../assats/logoProjectsPage.png")}
          alt="logo abaad real state company"
          className="logo-projects-page"
        />
        <h1 className="head-text-section-2">
          <span className="your-choose">:من الفكرة للإنجاز </span>
          <br />
          شوف تطوراتنا العقارية رفيعة المستوى

        </h1>
      </div>
      <div className="container-filter-projects-page"></div>

      <Slider />



      <hr className="container" />
      <ProjectsComponent />
      <div className="c container">
        <CardProjects2 />
      </div>
      <EndSection margin={true} headerText={'طلع وقت الاستثمار الذكي في العقارات'} desc={'لا تضيع الفرصة وتواصل معنا هالحين'} />
    </>
  );
}
