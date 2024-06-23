import axios from "axios";
import "./SingleUnit.css";
import SliderProject from "../../components/sliderProject/SliderProject";
import bac from "../../assats/bac.png";
import FormContactUs from "../../components/formCntactUs/FormContactUs";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
import { useParams } from "react-router-dom";

export default function SingleUnit(props) {
  const [serverUrl] = useRecoilState($ServerUrl);
  const parms = useParams();
  const unitId = parms.unitId;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
  useEffect(() => {
    scrollToTop();
    let server = `${serverUrl}/units/${unitId}`;
    axios
      .get(server, {
        params: {
          populate: {
            unit_features: {
              populate: "*",
            },
          },
        },
      })
      .then((res) => {
        console.log(res.data.data);
        // setUnits(res.data.data.attributes.project_units.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <>
      <div className="header-single-page container">
        <div className="left-header-unit-page">
          <h1 className="unit-title">{unit.unit_name}</h1>
          <div className="control-units">
            <button className="btn-control-unit next">
              <i className="bi bi-arrow-left-circle-fill icon-arrow-previous"></i>
              الوحدة التالية
            </button>
            <button className="btn-control-unit previous">
              الوحدة السابقة
              <i className="bi bi-arrow-right-circle-fill icon-arrow-previous"></i>
            </button>
          </div>
        </div>
        <div className="right-header-unit-page">
          <h1 className="head-text-section-2">
            مشروع
            <span className="your-choose"> الريان </span>
          </h1>
          <p className="brief-short">
            بنفخر بتقديم تجربة عملاء راضين وشهادات نجاح ملهمة بتعكس جودة خدماتنا
            وتقديم حلول مبتكرة
          </p>
        </div>
      </div>
      <div className="container">
        <SliderProject imgs={null} stylingSlider={true} />
      </div>
      <div className="brief-unit container">
        <div className="container-details-project container-details-unit">
          <h1 className="general-overview">نظرة عامة</h1>
          <div className="container-feoture display-card2">
            <p className="color-text2">6.250.000</p>
            <p className="color-text2 head-price">السعر</p>
          </div>
          <div className="container-feoture display-card2">
            <p className="color-text2">632م</p>
            <p className="color-text2 head-price">المساحات</p>
          </div>
          <div className="container-feoture display-card2">
            <p className="color-text2">5</p>
            <p className="color-text2 head-price">الغرف</p>
          </div>
          <div className="container-feoture display-card2">
            <p className="color-text2">1</p>
            <p className="color-text2 head-price">الصالة </p>
          </div>
          <div className="container-feoture display-card2">
            <p className="color-text2">2</p>
            <p className="color-text2 head-price">عدد دورات المياه</p>
          </div>
          <div className="container-feoture display-card2">
            <p className="color-text2">2</p>
            <p className="color-text2 head-price">مطبخ</p>
          </div>
          <hr className="container" />
          <h1 className="general-overview">المزايا</h1>
          <div className="container-fioture"></div>
        </div>
        <div className="desc-unit">
          <h1 className="general-overview">وصف</h1>
          <p className="brief-short color-text2">
            نحن نوفر خدمات الوساطة العقارية لعملائنا، خلال شراء العقار المناسب.
            ونحن نعمل على تسهيل عملية شراء العقارات بشكل سلس وسهل، وتوفير
            المشورة اللازمة لتحقيق أفضل قيمة للعملاءنحن نوفر خدمات الوساطة
            العقارية لعملائنا، خلال شراء العقار المناسب. ونحن نعمل على تسهيل
            عملية شراء العقارات بشكل سلس وسهل، وتوفير المشورة اللازمة لتحقيق
            أفضل قيمة للعملاءنحن نوفر خدمات الوساطة العقارية لعملائنا، خلال شراء
            العقار المناسب. ونحن نعمل على تسهيل عملية شراء العقارات بشكل سلس
            وسهل، وتوفير المشورة اللازمة لتحقيق أفضل قيمة للعملاء
          </p>
        </div>
      </div>

      <div className="container heading-form-unit-page">
        <h1 className="head-text-section-2">
          مشروع
          <span className="your-choose"> الريان </span>
        </h1>
        <p className="desc-heading-form-unit-page">
          بنفخر بتقديم تجربة عملاء راضين وشهادات نجاح ملهمة بتعكس جودة خدماتنا
          وتقديم حلول مبتكرة واقتصادية لتحقيق أعلى قيمة
        </p>
      </div>
      <div
        className="container-form-unit-page container"
        style={{ backgroundImage: `url(${bac})`, backgroundSize: "cover" }}
      >
        <FormContactUs
          stylingFontForm={true}
          styleInputs={true}
          stylebutton={true}
        />
      </div>
    </>
  );
}
