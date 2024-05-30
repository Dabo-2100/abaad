import AboutUsSection from "../../components/aboutUsSection/AboutUsSection";
import PaymentMethod from "../../components/paymentMethod/PaymentMethod";
// import ProjectsSale from "../../components/projectsSale/ProjectsSale";
import Section2Sale from "../../components/section2Sale/Section2Sale";
import Slider from "../../components/slider/Slider";
import EndSection from "../../components/endSection/EndSection";
import ProjectsComponent from "../../components/projectsComponent/ProjectsComponent";
// import bac from "../../assats/bac.png";
import "./Sale.css";
// import { NavLink } from "react-router-dom";
import VideoSection from "../../components/vedioSection/VideoSection";
import { useEffect } from "react";
export default function Sale() {
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
      <AboutUsSection
        head={"بيع عقارك؟"}
        heading={"استفد من قيمة عقارك"}
        heading2={"لأقصى درجة"}
        slog={
          "استراتيجياتنا المجربة والتحاليل السوقية تضمن لك الحصول على أفضل عرض"
        }
      />
      <Section2Sale />
      <PaymentMethod />
      <VideoSection/>
      <ProjectsComponent/>
      <Slider/>
      <EndSection
        margin={true}
        headerText={"خطوة أولى نحو بيع ناجح"}
        lineTow={"وأكثر سهولة"}
        desc={"هل أنت جاهز للبيع؟"}
      />
    </>
  );
}
