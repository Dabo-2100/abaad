import { NavLink } from "react-router-dom";
import "./AboutUsSection.css";
export default function AboutUsSection(props) {
  return (
    <>
      <div className="section-2-home container">
        <div className="left-about-us">
          <h1 className="head-text-section-2">
            <span className="our-info-text"> ------- {props.head}</span> <br />
            {props.heading} <br/>
            <span className="your-choose"> {props.heading2} </span>
          </h1>
          <p className="desc-section-t">
           {props.slog}
          </p>
          <div className="container-button">
          <NavLink to={"/projects"}>
          <button className="btns-section-2">شوف مشاريعنا</button>
          </NavLink>
          
          <NavLink to={"/about"}>
            <button className="btns-section-2 btn-read-more">اعرف أكثر</button>
            </NavLink>
          </div>
        </div>
        <div className="right-logo-image">
          <img
            src={require("../../assats/logo2.png")}
            alt=""
            className="logo-image-section-2"
          />
        </div>
      </div>
    </>
  );

}
