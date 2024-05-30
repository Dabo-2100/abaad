import "./Section2Sale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faChartLine,
  faPeopleGroup,
  faSignHanging,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Section2Sale() {
  return (
    <>
      <div className="mainnnn">
        <div className="container-section2-sale-page container">
          <img
            src={require("../../assats/carousal1.png")}
            alt=""
            className="bac-top-section2"
          />
          <div className="container2-section2-sale-page">
            <h1 className="head-text-section-2 heading-container2-section2-sale-page">
              مفتاحك لعملية بيع
              <span className="your-choose"> ميسرة </span>
            </h1>
            <p className="desc-section-t">
              في (أبعاد للعقارات) نحن نؤمن بأهمية كل تفصيل في عملية بيع بيتك نحن
              هنا عشان نخلي هالعملية سهلة وممتعة، عن طريق الاستراتيجيات الجديدة
              والدعم المتواصل طول الطريق
            </p>
          </div>
          <div className="bottom-container2-section2-sale-page">
            <div className="item-container-section-5 item-container2 item-container-section-5-s">
              <FontAwesomeIcon
                icon={faChartLine}
                className="icon-item-section-5 title-item-section-5-s"
              />
              <h1 className="title-item-section-5 title-item-section-5-s ali">
                الالتزام بالجودة والشفافية
              </h1>
              <p className="desc-item-section-5 title-item-section-5-s">
                التزامنا بتقديم خدمات عالية الجودة والشفافية في التعامل يخلينا
                الخيار المثالي لاحتياجاتك
              </p>
            </div>
            <div className="item-container-section-5 item-container2">
            <FontAwesomeIcon icon={faChartSimple} className="icon-item-section-5 "/>
             
              <h1 className="title-item-section-5 ali">تسويق مبتكر ومؤثر </h1>
              <p className="desc-item-section-5">
              نقدم حلول تسويقية مبتكرة ومؤثرة
 تعزز قيمة عقارك وتجذب العملاء بشكل كثيررائع
              </p>
            </div>
            <div className="item-container-section-5 item-container2">
            <FontAwesomeIcon icon={faPeopleGroup} className="icon-item-section-5 "/>
             
              <h1 className="title-item-section-5 ali">
              فريق متخصص ومحترف              </h1>
              <p className="desc-item-section-5">
              تجربة تسويق عقاري غير مع فريقنا المحترف والمتخصص
اللي دايم يسعى لتحقيق أفضل النتائج
              </p>
            </div>
            <div className="item-container-section-5 item-container2">
            <FontAwesomeIcon icon={faSignHanging} className="icon-item-section-5 "/>
              <h1 className="title-item-section-5 ali">
              متخصصون في العقارات
              </h1>
              <p className="desc-item-section-5">
              طلعنا بخبرتنا الواسعة في مجال التسويق العقاري
 ونقدم لكم خدماتنا المتخصصة.
              </p>
            </div>
          </div>
          <div className="container-button container-button-sale-page">
            <Link to={'/contactus'}>
            <button className="btns-section-2">بيع معنا الآن</button>
            </Link>
            <Link to={'/about'}>
            <button className="btns-section-2 btn-read-more">اعرف أكثر</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
