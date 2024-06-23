import { useEffect, useState } from "react";
import "./ViewProject.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ViewProject() {
  const projectId = window.location.pathname.split("/").slice(-1)[0];
  const params = useParams();
  const [serverUrl] = useState("https://easetasks.com/abaad");

  const [project, setProject] = useState([]);
  function getAllProjects() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects/${params.view}`;
    axios
      .get(server, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        let Res = res.data;
        console.log(Res.data);
        setProject(Res.data);
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
      {project.map((project , index) => (
        <div
        key={index}
          id="view-project"
          className="container d-flex align-items-end flex-column mt-5 mb-5"
        >
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title ">اسم المشروع</h1>
            <div className="container-text container  pt-2  d-flex flex-column align-items-end">
              <p className="text ">{project.project_name}</p>
            </div>
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title">صورة الغلاف</h1>
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="img-project"
            />
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title">صور المشروع</h1>
            <div className="container-img-project d-flex justify-content-end flex-row flex-wrap">
              <img
                src={require("../../../assats/a2.jpg")}
                alt=""
                className="imgs-project"
              />
              <img
                src={require("../../../assats/a2.jpg")}
                alt=""
                className="imgs-project"
              />
              <img
                src={require("../../../assats/a2.jpg")}
                alt=""
                className="imgs-project"
              />
              <img
                src={require("../../../assats/a2.jpg")}
                alt=""
                className="imgs-project"
              />
              <img
                src={require("../../../assats/a2.jpg")}
                alt=""
                className="imgs-project"
              />
              <img
                src={require("../../../assats/a2.jpg")}
                alt=""
                className="imgs-project"
              />
            </div>
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title ">التفاصيل</h1>
            <div className="container-text container  pt-2  d-flex flex-column align-items-end">
              <p className="text ">
                هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،
                عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير
                لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم
                إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص
              </p>
            </div>
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title ">الشعار</h1>
            <div className="container-text container  pt-2  d-flex flex-column align-items-end">
              <p className="text ">
                هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                الغالبية ات العشوائية إ
              </p>
            </div>
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title ">الحي</h1>
            <div className="container-text container  pt-2  d-flex flex-column align-items-end">
              <p className="text ">هنالك العديد</p>
            </div>
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title ">عدد المباني</h1>
            <div className="container-text container  pt-2  d-flex flex-column align-items-end">
              <p className="text ">343</p>
            </div>
          </div>
          <div className="container-title mb-5 container d-flex align-items-end flex-column">
            <h1 className="title ">المزايا</h1>
            <div className="container-text container  pt-2  d-flex flex-column align-items-end">
              <p className="text ">
                هنالك <br /> العديد من <br /> الأنواع <br /> المتوفرة <br />{" "}
                لنصوص
              </p>
            </div>
          </div>
          <div className="container-btn d-flex justify-content-between">
            <button className="btn btn-delete mb-5"> حذف المشروع </button>
            <button className="btn btn-units mb-5"> عرض الوحدات</button>
            <button className="btn btn-edit mb-5"> إجراء تعديل </button>
          </div>
        </div>
      ))}
      {/* <div
        id="view-project"
        className="container d-flex align-items-end flex-column mt-5 mb-5"
      >
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title ">اسم المشروع</h1>
          <div className="container-text container  pt-2  d-flex flex-column align-items-end">
            <p className="text ">الريان</p>
          </div>
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title">صورة الغلاف</h1>
          <img
            src={require("../../../assats/a2.jpg")}
            alt=""
            className="img-project"
          />
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title">صور المشروع</h1>
          <div className="container-img-project d-flex justify-content-end flex-row flex-wrap">
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="imgs-project"
            />
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="imgs-project"
            />
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="imgs-project"
            />
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="imgs-project"
            />
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="imgs-project"
            />
            <img
              src={require("../../../assats/a2.jpg")}
              alt=""
              className="imgs-project"
            />
          </div>
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title ">التفاصيل</h1>
          <div className="container-text container  pt-2  d-flex flex-column align-items-end">
            <p className="text ">
              هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
              تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
              النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق
              أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في
              هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت
              على إعادة تكرار مقاطع من نص
            </p>
          </div>
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title ">الشعار</h1>
          <div className="container-text container  pt-2  d-flex flex-column align-items-end">
            <p className="text ">
              هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
              ات العشوائية إ
            </p>
          </div>
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title ">الحي</h1>
          <div className="container-text container  pt-2  d-flex flex-column align-items-end">
            <p className="text ">هنالك العديد</p>
          </div>
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title ">عدد المباني</h1>
          <div className="container-text container  pt-2  d-flex flex-column align-items-end">
            <p className="text ">343</p>
          </div>
        </div>
        <div className="container-title mb-5 container d-flex align-items-end flex-column">
          <h1 className="title ">المزايا</h1>
          <div className="container-text container  pt-2  d-flex flex-column align-items-end">
            <p className="text ">
              هنالك <br /> العديد من <br /> الأنواع <br /> المتوفرة <br /> لنصوص
            </p>
          </div>
        </div>
        <div className="container-btn d-flex justify-content-between">
          <button className="btn btn-delete mb-5"> حذف المشروع </button>
          <button className="btn btn-units mb-5"> عرض الوحدات</button>
          <button className="btn btn-edit mb-5"> إجراء تعديل </button>
        </div>
      </div> */}
    </>
  );
}
