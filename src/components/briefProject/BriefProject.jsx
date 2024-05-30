import { useParams } from "react-router-dom";
import SliderProject from "../sliderProject/SliderProject";
import "./BriefProject.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
export default function BriefProject() {
  const [serverUrl] = useRecoilState($ServerUrl);
  const params = useParams();
  const [project, setProject] = useState({units:[]});
  function getAllProjects() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects/${params.projectId}`;
    axios
      .get(server).then((res) => {
        console.log(res.data);
        setProject(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllProjects();
  }, []);
  return (
    <>
      <div className="brief-project container">
        <div className="left-section-brief-project">
          <SliderProject />
          <div className="desc-brief-project">
            <h1 className="general-overview">وصف</h1>
            <p className="brief-short color-text2">
              نحن نوفر خدمات الوساطة العقارية لعملائنا، خلال شراء العقار
              المناسب. ونحن نعمل على تسهيل عملية شراء العقارات بشكل سلس وسهل،
              وتوفير المشورة اللازمة لتحقيق أفضل قيمة للعملاءنحن نوفر خدمات
              الوساطة العقارية لعملائنا، خلال شراء العقار المناسب. ونحن
            </p>
          </div>
        </div>
        <div className="right-section-brief-project">
          <h1 className="head-text-section-2">
            مشروع
            <span className="your-choose"> {project.project_name} </span>
          </h1>
          <p className="brief-short">
            بنفخر بتقديم تجربة عملاء راضين وشهادات نجاح ملهمة بتعكس جودة
            خدماتنا وتقديم حلول مبتكرة
          </p>
          <div className="container-details-project">
            <h1 className="general-overview">نظرة عامة</h1>
            <div className="container-feoture display-card2">
              <p className="color-text2">تبدأ من {project.units[0].unit_price} </p>
              <p className="color-text2 head-price">السعر </p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.units[0].unit_area}م</p>
              <p className="color-text2 head-price">المساحات</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.units[0].unit_rooms_no} </p>
              <p className="color-text2 head-price">الغرف</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.units[0].unit_lounges_no} </p>
              <p className="color-text2 head-price">الصالة</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.units[0].unit_bathrooms_no} </p>
              <p className="color-text2 head-price">عدد دورات المياه</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.units[0].unit_kitchens_no} </p>
              <p className="color-text2 head-price">مطبخ</p>
            </div>
            <hr className="container" />
            <h1 className="general-overview">المزايا</h1>
            <div className="container-fioture"></div>
          </div>
        </div>
      </div>
    </>
  );
}
