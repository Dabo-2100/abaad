import { NavLink } from 'react-router-dom';
import './ServicesTabs.css'
import {useState } from "react";
export default function ServicesTabs(props) {
  let styling = {
    backgroundColor: "#f5f5f5",
  }
  const [toggle, settoggle] = useState(1);
  function updatetoolge(id) {
    
    settoggle(id);
   }
    return(
        <>
        <div className="container-server-tabs-color" style={props.stylecolor && styling}>
              <div className="section-3 container" >
        <div className="left-section-3">
          <p className="section-3-services-text"> ------ الخدمات</p>
          <h1 className="head-text-section-2 head-text-section-2-3">
            <span className="your-choose">  {props.heading} </span>
           {props.heading2}
          </h1>
          <p className="desc-section-t">
          {props.desc}
          </p>
          <div className="container-tabs-section-3">
            <h1
              className={toggle === 1 ? "tab active" : "tab"}
              onClick={() => updatetoolge(1)}
            >
              خدمات الوساطة العقارية -------{" "}
            </h1>
            <h1
              className={toggle === 2 ? "tab active" : "tab"}
              onClick={() => updatetoolge(2)}
            >
              الاستشارات العقارية -------{" "}
            </h1>
            <h1
              className={toggle === 3 ? "tab active" : "tab"}
              onClick={() => updatetoolge(3)}
            >
              التفتيش العقاري -------{" "}
            </h1>
            <h1
              className={toggle === 4 ? "tab active" : "tab"}
              onClick={() => updatetoolge(4)}
            >
              التوثيق القانوني -------{" "}
            </h1>
            <h1
              className={toggle === 5 ? "tab active" : "tab"}
              onClick={() => updatetoolge(5)}
            >
              للبحث عن التمويل -------{" "}
            </h1>
            <h1
              className={toggle === 6 ? "tab active" : "tab"}
              onClick={() => updatetoolge(6)}
            >
              المناطق الموصى بها -------{" "}
            </h1>
          </div>
        </div>

        <div
          className={toggle === 1 ? "show-right-section-3" : "right-section-3"}
        >
          <img
            src={require("../../assats/tab1.png")}
            alt=""
            className="tab-image"
          />
          <h1 className="head-text-section-2 head-text-section-2-3 right-title-tabs">
          باقة خدماتنا المميزة مصممة خصيصًا لك
            <span className="your-choose"> رحلة العقارات </span>
          </h1>
          <p className="desc-section-t right-desc-tabs">
            نضمن سهولة شراء العقارات من الألف للياء من تقديم الاستشارات لحد
            خدمات ما بعد البيع.
          </p>
          <div className="container-btn-section-3">
            <NavLink to={'/projects'}>
            <button className="btns-section-2 btns-section-3">
              تصفح مشروعاتنا
            </button>
            </NavLink>
          </div>
        </div>
        <div
          className={toggle === 2 ? "show-right-section-3" : "right-section-3"}
        >
          <img
            src={require("../../assats/tab2.jpg")}
            alt=""
            className="tab-image"
          />
          <h1 className="head-text-section-2 head-text-section-2-3 right-title-tabs">
            الاستشارات
            <span className="your-choose"> العقارية </span>
          </h1>
          <p className="desc-section-t right-desc-tabs">
            نعمل على توفير المشورة اللي تحدد الفرص الاستثمارية الصحيحة وندعمك في
            تحقيق أهدافك الاستثمارية.{" "}
          </p>
          <div className="container-btn-section-3">
            <button className="btns-section-2 btns-section-3">
              تصفح مشروعاتنا
            </button>
          </div>
        </div>
        <div
          className={toggle === 3 ? "show-right-section-3" : "right-section-3"}
        >
          <img
            src={require("../../assats/tab3.jpg")}
            alt=""
            className="tab-image"
          />
          <h1 className="head-text-section-2 head-text-section-2-3 right-title-tabs">
            التفتيش <span className="your-choose"> العقاري </span>
          </h1>
          <p className="desc-section-t right-desc-tabs">
            نقدم مبيعات العقارات للعملاء اللي مهتمين في العقارات ونوفر الفحص
            الشخصي للعقارات المتاحة للبيع.{" "}
          </p>
          <div className="container-btn-section-3">
            <button className="btns-section-2 btns-section-3">
              تصفح مشروعاتنا
            </button>
          </div>
        </div>
        <div
          className={toggle === 4 ? "show-right-section-3" : "right-section-3"}
        >
          <img
            src={require("../../assats/tab4.jpg")}
            alt=""
            className="tab-image"
          />
          <h1 className="head-text-section-2 head-text-section-2-3 right-title-tabs">
            <span className="your-choose"> التوثيق </span>
            القانوني
          </h1>
          <p className="desc-section-t right-desc-tabs">
            نسهّل لك الإجراءات القانونية المطلوبة لشراء العقارات ونتأكد من صحة
            الوثائق والعقود.{" "}
          </p>
          <div className="container-btn-section-3">
            <button className="btns-section-2 btns-section-3">
              تصفح مشروعاتنا
            </button>
          </div>
        </div>
        <div
          className={toggle === 5 ? "show-right-section-3" : "right-section-3"}
        >
          <img
            src={require("../../assats/tab5.jpg")}
            alt=""
            className="tab-image"
          />
          <h1 className="head-text-section-2 head-text-section-2-3 right-title-tabs">
            البحث عن <span className="your-choose"> التمويل </span>
          </h1>
          <p className="desc-section-t right-desc-tabs">
            نساعدك في الحصول على القروض العقارية وترتيب التمويل من البنوك
            والمؤسسات المالية.{" "}
          </p>
          <div className="container-btn-section-3">
            <button className="btns-section-2 btns-section-3">
              تصفح مشروعاتنا
            </button>
          </div>
        </div>
        <div
          className={toggle === 6 ? "show-right-section-3" : "right-section-3"}
        >
          <img
            src={require("../../assats/tab6.jpg")}
            alt=""
            className="tab-image"
          />
          <h1 className="head-text-section-2 head-text-section-2-3 right-title-tabs">
            تقديم المشورة
            <span className="your-choose"> للماكن الموصى بها </span>
          </h1>
          <p className="desc-section-t right-desc-tabs">
            نقدم لك المشورة عن المناطق المناسبة لشراء العقارات وتحليل اتجاهات
            السوق العقاري.{" "}
          </p>
          <div className="container-btn-section-3">
            <button className="btns-section-2 btns-section-3">
              تصفح مشروعاتنا
            </button>
          </div>
        </div>
      </div>
      </div>
        </>
    )
}