import "./Home.css";
import { useEffect } from "react";
// import axios from "axios";
import SliderFilter from "../../components/sliderFilter/SliderFilter";
import AboutUsSection from "../../components/aboutUsSection/AboutUsSection";
import ServicesTabs from "../../components/servicesTabs/ServicesTabs";
import OurProjectSection from "../../components/ourProjectSection/OurProjectSection";
import LastSection from "../../components/lastSection/LastSection";
import Counter from "../../components/counter/Counter";
// import CardProjects2 from "../../components/cardProjects2/CardProjects2";
// import ProjectsComponent from "../../components/projectsComponent/ProjectsComponent";
// import Slider from "../../components/slider/Slider";
// import { useEffect } from "react";
export default function Home() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  }


  useEffect(() => {
    scrollToTop();
  }, []);
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
      <SliderFilter />
      <AboutUsSection
        head={"معلومات عنا"}
        heading={"طفشت من البحث عن البيت اللي يناسبك؟"}
        heading2={"!تعبك بينتهي هنيّة"}
        slog={
          "وجودنا هنا عشان نساعدك في مشروع شراء عقارك المثالي، عندنا خدمات كاملة ما راح تخليك في شك فيها"
        }
      />
      <Counter />
      <ServicesTabs
        stylecolor={true}
        heading={"شريكك الموثوق"}
        heading2={"في رحلة العقارات"}
        desc={
          "طالع ما عندنا، واكتشف كيف تحول ملكيتك إلى صفقة ناجحة، ما تكتفي ببيع عقارك، ابحث عن الشريك اللي يساعدك في تحقيق أقصى استفادة منه"
        }
      />
      {/* <ProjectsComponent/> */}
      {/* <Slider/> */}
      <OurProjectSection />
      <LastSection />
    </>
  );
}
