import "./Section2About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
export default function Section2About() {
  return (
    <>
      <div className="main-section2-about col-12">
        <div className="container container-section2-about">
          <div className="column-section2-about column1">
            <div className="top-column1-about item-column1 s-item-color">
              <i className="bi bi-feather icon-item-column s-color"></i>
              <h1 className="title-item-column s-color">رسالتنا</h1>
              <p className="desc-item-column s-color">
                نحن مؤمنين بأن الاهتمام اللي نبذله في رحلتك العقارية هو السبب
                الرئيسي وراء رضاك ونجاحنا
              </p>
            </div>
            <div className="bottom-column1-about item-column1">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className="icon-item-column"
              />
              <h1 className="title-item-column">هدفنا</h1>
              <p className="desc-item-column">
                سواء كنت مشتري لأول مرة، أو مستثمر محترف، أو حتى تبغى تبيع
                عقارك، نحن هنا عشان نقدم لك الإرشاد والدعم في كل خطوة
              </p>
            </div>
          </div>

          <div className="column-section2-about column2">
            <div className="top-column2-about item-column1">
              <i className="bi bi-fingerprint icon-item-column"></i>
              <h1 className="title-item-column">رؤيتنا</h1>
              <p className="desc-item-column">
                بنعتقد إن العثور على البيت المثالي مو بس عملية تداول، بل هو عن
                إنشاء مكان ينمو فيه الذكريات، وتكبر العائلات، وتتحقق الأحلام ,
                لدي ابعاد بيتك المثالى راسلنا الان وابحث عن بيتك المثالى
              </p>
            </div>
            <img
              src={require("../../assats/carousal1.png")}
              alt=""
              className="bottom-column2-about"
            />
          </div>

          <div className="column-section2-about column3 column-section2-about-tab">
            <img
              src={require("../../assats/pro.jpg")}
              alt=""
              className="top-column3-about"
            />
            <div className="bottom-column3-about item-column1 ">
              <i className="bi bi-fingerprint icon-item-column "></i>
              <h1 className="title-item-column">قيمنا الفريدة</h1>
              <p className="desc-item-column">
                التعاون،تعزيز ثقافة العمل التطوعي، تحــقــيق الأهداف الخيرية،
                العــطاء والمـــشــاركة، االلتــزام والمـــســؤولية،
                الــشفــافــيــة، االحــتــــراموالمـــشــاركة، االلتــزام
                والمـــســؤولية، الــشفــافــيــة، االحــتــــرام
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
