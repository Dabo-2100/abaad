import { Link, NavLink } from 'react-router-dom'
import CardProject from '../cardProjects/CardProject'
import './OurProjectSection.css'
import Slider from '../slider/Slider'

export default function OurProjectSection() {
  return (
    <>
      <div className="section-4 container">
        <div className="top-section-4">
          <div className="title-our-project-section-4">
            <p className="section-3-services-text"> ------ مشاريعنا</p>
            <h1 className="head-text-section-2 title-section4">
              أعلى
              <span className="your-choose"> مستويات </span>
              الجودة والاحترافية
            </h1>
          </div>
          <div className="desc-our-project-section-4">
            <p className="desc-section-t desc-section-4-text">
              حين يتجاوز التميّز التوقعات في (أبعاد العقارية) نشوف كل مشروع
              عقاري لنا قصة نجاح مميزة، وهذا الفريق يعمل بكد واجتهاد عشان نضمن
              تحقيق أعلى مستويات التميز والجودة.
            </p>
            <button className="btns-section-2"> اعرف اكثر </button>
          </div>
        </div>
      </div>

      <Slider />
      <div className="section-4-upd container">
        <div className="bottom-section-4">
          <div className="left-bottom-section-4">
            <img
              src={require("../../assats/section4.png")}
              alt=""
              width="80%"
            />
          </div>
          <div className="right-bottom-section-4">
            <p className="desc-bottom-section-4">تبي البيع؟ ----- </p>
            <h1 className="title-bottom-section-4">فرصة جديدة بكل لحظة</h1>
            <p className="desc-bottom-section-4">
              طبّق الجديد في رحلتك ببيع عقارك مع (أبعاد العقارية)، وجودنا هنا
              عشان نساعدك تحصل على أفضل قيمة لعقارك وتجربة بيع مرة سهلة ومريحة.
            </p>
            <div className="container-button container-button-home-page">
              <button className="btns-section-2 btn-read-more btn2-section-4">
                اعرف أكثر
              </button>
              <NavLink to={"/contactus"}>
                <button className="btns-section-2 btn-read-more btn2-section-4">
                  تواصل معنا
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}