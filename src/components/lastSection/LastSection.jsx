import "./LastSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faChartLine,
  faUserGroup,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import EndSection from "../endSection/EndSection";
import { NavLink } from "react-router-dom";
export default function LastSection() {
  return (
    <>
      <div className="sectionn-5">
        <div className="container-cintent-section-5 container">
          <div className="right-items-section-5">
            <div className="item-container-section-5 ">
              <FontAwesomeIcon
                icon={faChartLine}
                className="icon-item-section-5 "
              />
              <h1 className="title-item-section-5">
                الالتزام بالجودة والشفافية
              </h1>
              <p className="desc-item-section-5">
                التزامنا بتقديم خدمات عالية الجودة والشفافية في التعامل يخلينا
                الخيار المثالي لاحتياجاتك.
              </p>
            </div>
            <div className="item-container-section-5 item-container-section-5-s">
              <FontAwesomeIcon
                icon={faHandshake}
                className="icon-item-section-5 icon-item-section-5-s"
              />
              <h1 className="title-item-section-5 title-item-section-5-s">
                تسويق مبتكر وفعّال
              </h1>
              <p className="desc-item-section-5 title-item-section-5-s">
                نقدم حلول تسويقية مبتكرة ومؤثرة تعزز قيمة عقارك وتجذب العملاء
                بشكل كثيررائع.
              </p>
            </div>
            <div className="item-container-section-5">
              <FontAwesomeIcon icon={faHouse} className="icon-item-section-5" />
              <h1 className="title-item-section-5">فريق متخصص ومحترف</h1>
              <p className="desc-item-section-5">
                تجربة تسويق عقاري غير مع فريقنا المحترف والمتخصص اللي دايم يسعى
                لتحقيق أفضل النتائج.
              </p>
            </div>
            <div className="item-container-section-5">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="icon-item-section-5"
              />
              <h1 className="title-item-section-5">تخصصنا في السوق العقاري</h1>
              <p className="desc-item-section-5">
                طلعنا بخبرتنا الواسعة في مجال التسويق العقاري ونقدم لكم خدماتنا
                المتخصصة.
              </p>
            </div>
          </div>
          <div className="left-about-us">
            <h1 className="head-text-section-2">
              <span className="our-info-text"> ------- ليش أبعاد؟ </span> <br />
              لتجربة عقارية
              <span className="your-choose"> مميزة ومنجزة </span>
            </h1>
            <p className="desc-section-t">
              نجمع بين الخبرة الطويلة في سوق العقارات والرؤية المبتكرة عشان ننتج
              لك تجارب مميزة، من خلال سنين من الشغل، نعرف كيف نحقق أهدافك
              العقارية بأفضل الطرق الممكنة.
            </p>
            <div className="container-button">
              <NavLink to={"/projects"}>
                <button className="btns-section-2"> شوف مشاريعنا </button>
              </NavLink>
              <NavLink to={"/about"}>
                <button className="btns-section-2 btn-read-more">
                  اعرف أكثر
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <EndSection
        headerText={"بيع عقارك بسهولة، اشتري بيتك الجديد بثقة"}
        lineTow={"لا يفوتك فرص الاستثمار الناجح"}
        desc={
          "طالع ما عندنا، واكتشف كيف تحول ملكيتك إلى صفقة ناجحة، ما تكتفي ببيع عقارك، ابحث عن الشريك اللي يساعدك في تحقيق أقصى استفادة منه"
        }
      />
    </>
  );
}
