import { Link } from "react-router-dom";
import "./VideoSection.css";
export default function VideoSection() {
  return (
    <>
      <div className="main-container-video-section">
        <div className="container container-videoTest">
          <iframe
            className="video"

            src="https://www.youtube.com/embed/eWq-x4IpLRM"
            title="BEAUTIFUL MODERN 4 BEDROOM BUNGALOW HOUSE DESIGN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="container-video-text">
            <h1 className="head-text-video">لماذا يثق أصحاب العقارات في (أبعاد) للبيع؟
            </h1>
            <p className="desc-text-video">افتح الباب أمام أفضل قيمة لعقارك واختر البيع بثقة
              استغلال إمكانيات عقارك إلى الحد الأقصى مما يحقق اهدافك للبيع</p>
            <div className="container-item-text-video">
              <p className="desc-text-video desc-text-video-item"> إرشادات الخبراء _</p>
              <p className="desc-text-video desc-text-video-item"> تحقيق أهداف بيعك _</p>
              <p className="desc-text-video desc-text-video-item"> بيع مرة ميسر _</p>
              <p className="desc-text-video desc-text-video-item"> استغلال ذكي لبيعك _</p>
            </div>
            <Link to={'/contactus'}>
              <button className="btns-section-2">بيع معنا الآن</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
