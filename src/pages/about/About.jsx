import AboutUsSection from "../../components/aboutUsSection/AboutUsSection";
import Counter from "../../components/counter/Counter";
import LastSection from "../../components/lastSection/LastSection";
import Section2About from "../../components/section2About/Section2About";
import ServicesTabs from "../../components/servicesTabs/ServicesTabs";
import { useEffect } from "react";
import "./About.css";
export default function About() {
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
        head={"منو نحن؟"}
        heading={"بعد كل نجاح "}
        heading2={"فيه قصة نحكيها"}
        slog={
          "إكتشف مسارك في عالم العقارات في مدينة جدة شوف تاريخنا من النجاحات في المبيعات والعملاء الراضين عن خدماتنا، منذ تأسيس الشركة قبل سنوات وحتى هالحين"
        }
      />
      <Counter />
      <Section2About />
      <ServicesTabs
        styling={false}
        heading={" باقة خدماتنا المميزة"}
        heading2={"مصممة خصيصًا لك"}
        desc={
          "أبعاد شريكك الموثوق من الشراء إلى البيع، الاستثمار لإدارة العقارات، نحن هنيّة بخدمتك"
        }
      />
      <LastSection />
    </>
  );
}
