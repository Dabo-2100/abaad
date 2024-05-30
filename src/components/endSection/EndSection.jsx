import "./EndSection.css";
import bac from "../../assats/bac.png";
import { NavLink } from "react-router-dom";
export default function EndSection(props) {
  const margin = {
    marginTop: '200px'
  }
  return (
    <>
      <div className="section-6 container" style={props.margin && margin}>
        <div
          className="content-section-6"
          style={{ backgroundImage: `url(${bac})`, backgroundSize: "cover" }}
        >
          <h1 className="title-section-6-end">
            {props.headerText}
            <br /> {props.lineTow}
          </h1>
          <p className="desc-section-6">
           {props.desc}
          </p>
          <NavLink to={"/contactus"}>
            <button className="btns-section-2 btn-read-more btn2-section-6">
              واصل معنا الآن
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
