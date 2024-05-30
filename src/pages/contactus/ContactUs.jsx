import back from "../../assats/backgroundcontactus.png";
import FormContactUs from "../../components/formCntactUs/FormContactUs";
import "./ContactUs.css";
import { useEffect } from "react";
export default function ContactUs() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  }


  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div
        className="interface-section-contactus-page container"
        style={{ backgroundImage: `url(${back})` }}
      >
        <h1 className="title-contactus-page">تواصل معنا</h1>
      </div>
      <div className="main-contactus-page container">
        <FormContactUs />
        <div className="contant-contactus">
          <div className="top-content-contactus-page">
            <h1 className="head-text-section-2 head-text-section-2-3">
              بيانات التواصل
            </h1>
            <div className="location-container">
              <i className="bi bi-geo-alt-fill icon-location"></i>
              <p className="location-address">
                المملكة العربية السعودية-جدة طريق المدينة المنورة-مبني اوسيس
                الدور الاول
              </p>
            </div>
            <div className="location-container">
              <i className="bi bi-telephone-fill icon-location"></i>
              <p className="location-address">00966126222282</p>
            </div>
            <div className="location-container">
              <i className="bi bi-envelope-fill icon-location"></i>
              <p className="location-address"></p>
            </div>
            <div className="location-container">
              <i className="bi bi-twitter-x icon-locationn"></i>
              <i className="bi bi-instagram icon-locationn"></i>
              <i className="bi bi-youtube icon-locationn"></i>
              <i className="bi bi-tiktok icon-locationn"></i>
              <i className="bi bi-linkedin icon-locationn"></i>
            </div>
          </div>
          <div className="bottom-content-contactus-page">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5888347882583!2d39.113673625045955!3d21.627530666944658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da32c2b38d6f%3A0xe7fe8c34634fc6a5!2z2LHYr9iz2Yog2YXZiNmE!5e1!3m2!1sar!2seg!4v1711993020349!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
