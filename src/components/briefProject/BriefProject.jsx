import { useParams } from "react-router-dom";
import SliderProject from "../sliderProject/SliderProject";
import "./BriefProject.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
export default function BriefProject() {
  const [serverUrl] = useRecoilState($ServerUrl);
  const parms = useParams();
  const projectId = parms.projectId;
  const [project, setProject] = useState({});

  function getProjectDetails() {
    let server = `${serverUrl}/projects/${projectId}`;
    axios
      .get(server, {
        params: {
          populate: {
            project_features: {
              populate: "*",
            },
            project_photos: {
              populate: "*",
            },
          },
        },
      })
      .then((res) => {
        console.log(res.data.data.attributes);
        setProject(res.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProjectDetails();
  }, []);

  return (
    <>
      <div className="brief-project container">
        <div className="left-section-brief-project">
          <SliderProject
            imgs={project.project_photos ? project.project_photos : undefined}
          />
          <div className="desc-brief-project">
            <h1 className="general-overview">وصف</h1>
            <p className="brief-short color-text2">
              {project.project_desc
                ? project.project_desc
                : `نحن نوفر خدمات الوساطة العقارية لعملائنا، خلال شراء العقار
              المناسب. ونحن نعمل على تسهيل عملية شراء العقارات بشكل سلس وسهل،
              وتوفير المشورة اللازمة لتحقيق أفضل قيمة للعملاءنحن نوفر خدمات
              الوساطة العقارية لعملائنا، خلال شراء العقار المناسب. ونحن`}
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
            {project.project_slogan
              ? project.project_slogan
              : `بنفخر بتقديم تجربة عملاء راضين وشهادات نجاح ملهمة بتعكس جودة خدماتنا
            وتقديم حلول مبتكرة`}
          </p>
          <div className="container-details-project">
            <h1 className="general-overview">نظرة عامة</h1>
            <div className="container-feoture display-card2">
              <p className="color-text2">تبدأ من {project.min_price} </p>
              <p className="color-text2 head-price">السعر </p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.min_area}م</p>
              <p className="color-text2 head-price">المساحات</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.min_rooms} </p>
              <p className="color-text2 head-price">الغرف</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.min_halls} </p>
              <p className="color-text2 head-price">الصالة</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.min_baths} </p>
              <p className="color-text2 head-price">عدد دورات المياه</p>
            </div>
            <div className="container-feoture display-card2">
              <p className="color-text2"> تبدأ من {project.min_kitchens} </p>
              <p className="color-text2 head-price">مطبخ</p>
            </div>
            <hr className="container" />
            <h1 className="general-overview">المزايا</h1>
            {project.project_features ? (
              <div className="container-fioture d-flex gap-3 flex-wrap justify-content-center">
                {project.project_features.data.map((feature) => {
                  return (
                    <div
                      className="d-flex flex-wrap"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        className="col-12"
                        src={
                          serverUrl.includes("localhost")
                            ? serverUrl.split("/api")[0] +
                              feature.attributes.feature_icon.data.attributes
                                .url
                            : null
                        }
                      />
                      <p className="col-12 text-center">
                        {feature.attributes.feature_name}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
