import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="main-footer col-12">
        <div className="container-footer container">
          {/*----------- logo and links footer-----------*/}
          <div className="top-footer container">
            <img
              src={require("../../assats/logoWhite.png")}
              alt="logo abaad real state"
              className="image-logo-footer"
            />
            <div className="container-menu-footer">
              <NavLink to={"/"} className="menu-footer-item">
                الرئيسية
              </NavLink>
              <NavLink to={"/projects"} className="menu-footer-item">
                المشاريع
              </NavLink>
              <NavLink to={"/about"} className="menu-footer-item">
                من نحن؟
              </NavLink>
              <NavLink to={"/sale"} className="menu-footer-item">
                البيع من خلالنا
              </NavLink>
              <NavLink to={"/terms"} className="menu-footer-item">
                الشروط والاحكام
              </NavLink>
              <NavLink to={"/privacy"} className="menu-footer-item">
                سياسة الخصوصية
              </NavLink>
            </div>
            {/* <a href="tel:+966126222282" className="link-phone-number">00966126222282</a>
<p className="address">المملكة العربية السعودية-جدة طريق المدينة المنورة-مبني اوسيس الدور الاول</p>
          </div>
          <div className="under-line-container col-12">
            <div className="container-documentation"></div>
          <div className="conainer-socialmedia-icons"></div> */}
          </div>
          {/*----------- info and text footer-----------*/}
          <div className="middle-footer container">
            <div className="container-info">
              <a href="tel:+966126222282" className="link-phone-number">
                00966126222282
              </a>
              <p className="address">info@abaad.com</p>
              <p className="address">
                المملكة العربية السعودية-جدة طريق المدينة المنورة-مبني اوسيس
                الدور الاول
              </p>
            </div>
            <div className="container-text-footer">
              <p className="text-footer">
                احصل على تصميمات مخصصة تلبي احتياجات عملك بشكل مثالي واستمتع
                بالحياة بدون تعب مع خدماتنا الاستثنائية
                <FontAwesomeIcon
                  icon={faUpRightAndDownLeftFromCenter}
                  className="icon"
                />
              </p>
            </div>
          </div>
          {/*----------- line footer-----------*/}
          <div className="container">
            <div className="line"></div>
          </div>
          {/*----------- social media and documentation footer -----------*/}

          <div className="container-media-and-documentation col-12 container">
            <div className="social-media-icons">
              <a href="https://x.com/abaad_net?s=11&t=Hd7x0dd4eWliNVVRZmunpA">
                <i className="bi bi-twitter-x icon-social-media"></i>
              </a>
              <a href="https://www.instagram.com/abaad_net?igsh=dzRtcmJoY2IyZzFy">
              <i className="bi bi-instagram icon-social-media"></i>
              </a>
              <a href="https://youtube.com/@abaad_net?si=DfCklHNHNc9tBtHy">
              <i className="bi bi-youtube icon-social-media"></i>
              </a>
              <a href="https://www.tiktok.com/@abaad_net?_t=8koZftAbsBe&_r=1">
              <i className="bi bi-tiktok icon-social-media"></i>
              </a>
              <a href="https://www.linkedin.com/company/abaadnetsa/">
              <i className="bi bi-linkedin icon-social-media"></i>
              </a>

            </div>
            <div className="container-documentation">
              <p className="documentation-text">
                © 2024 جميع الحقوق محفوظة . شركة أبعاد العقارية
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
