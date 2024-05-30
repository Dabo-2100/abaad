import axios from "axios";
import "./CardUnit.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
export default function CardUnit() {
  const [serverUrl] = useRecoilState($ServerUrl);
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
        // console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllUnits()
  } , [])
  return (
    <>
      <div className="card2-unit-page">
        <img
          src={require("../../assats/pro.jpg")}
          alt="project image"
          className="unit-image-card2"
        />
        <div className="container-ditalse-projects-card">
          <div className="container-project-name-card2">
            <h1 className="title-unit-card2">fggggg</h1>
          </div>
          <div className="price-project-card2 display-card2">
            <p className="color-text">6.250.000</p>
            <p className="color-text head-price">السعر </p>
          </div>
          <div className="space-project-card2 display-card2">
            <p className="color-text">632م</p>
            <p className="color-text head-price">المساحات</p>
          </div>
          <div className="roms-project-card2 display-card2">
            <p className="color-text">5 غرف</p>
            <p className="color-text head-price">الغرف</p>
          </div>
          <div className="features-project-card2 display-card2">
            <p className="color-text">سطح - موقف - مصعد</p>
            <p className="color-text head-price">مميزات</p>
          </div>
        </div>
        <Link to={'/unit'}>
        <button className="btn-project-card2">تفاصيل</button>
        </Link>
      </div>
    </>
  );
}
