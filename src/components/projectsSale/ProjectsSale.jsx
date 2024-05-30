import CardProject2 from '../cardProjects2/CardProjects2'

import './ProjectsSale.css'
export default function ProjectsSale() {
    return(
        <>
        <div className="container-Projects-sale container">
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
        <div className="container-projects-sale-page">
<CardProject2/>

        </div>
      
        </div>
        </>
    )
}