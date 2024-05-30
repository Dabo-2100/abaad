import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
export default function Header() {
    let [toggle , settoggle] = useState(false)
  return (
    <>
      <div className="main-header container col-12">
        {/*----------button contact us-----------*/}
        <div className="left-header ">
        <NavLink to={"/contactus"}>
          <button className="contact-us-button-header">تواصل الآن</button>
        </NavLink>
        </div>
        {/*----------menu component computer-----------*/}
        <div className="maddle-header" style={{right: toggle && "0"}}>
            <div className="container-x-mark-icon" >
        <FontAwesomeIcon icon={faXmark} className="x-mark-icon" onClick={() => settoggle(false)}/>
            </div>
          <NavLink to={"/"} className="menu-header-item" onClick={() => settoggle(false)}>
            الرئيسية
          </NavLink>
          <NavLink to={"/projects"} className="menu-header-item" onClick={() => settoggle(false)}>
            المشاريع
          </NavLink>
          <NavLink to={"/about"} className="menu-header-item" onClick={() => settoggle(false)}>
            من نحن؟
          </NavLink>
          <NavLink to={"/sale"} className="menu-header-item sale-border" onClick={() => settoggle(false)}>
            البيع من خلالنا
          </NavLink>
        </div>
        {/*----------logo component-----------*/}
        <div className="right-header">
          <img
            src={require("../../assats/favicon.png")}
            alt="logo abaad company"
            className="logo-image"
          />
          <p className="logo-text">
            أبعاد
            <br/>
            العقـــــارية
          </p>
        </div>

        {/*----------menu component phone-----------*/}
        <div className="container-menu-icon">
          <div className="container-icon col-12">
            <FontAwesomeIcon icon={faBars} className="menu-icon-header" onClick={() => settoggle(true)}/>
          </div>
        </div>


      </div>
    </>
  );
}
