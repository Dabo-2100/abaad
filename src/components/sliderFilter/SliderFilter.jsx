import "./SliderFilter.css";
import "animate.css";
import Carousel from "../../assats/carousal1.png";
import video1 from "../../assats/v1.mp4";
import video2 from "../../assats/v2.mp4";
import video3 from "../../assats/v3.mp4";

export default function SliderFilter() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide slideree"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active container-video-carousal">
            <video src={video1} autoPlay muted loop />
            <div className="filter-carousal-video">
              <div className="container-simple">
                <h1 className="aaaaaaa">
                  {" "}
                  إبدأ مع <span className="name-company-color">
                    أبعـــاد
                  </span>{" "}
                </h1>
              </div>
              <div className="container-simple2">
                <h1 className="aaaaaaa2">
                  وخلي رحلة التدقيق عن بيتك اللي تبيه هنيا{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item active container-video-carousal">
            <video src={video2} autoPlay muted loop />
            <div className="filter-carousal-video">
              <div className="container-simple">
                <h1 className="aaaaaaa">
                طالع ما عندنا
                  <span className="name-company-color"></span>
                </h1>
              </div>
              <div className="container-simple2">
                <h1 className="aaaaaaa2"> باقة خدماتنا المميزة مصممة خصيصًا لك </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item active container-video-carousal">
            <video src={video3} autoPlay muted loop />
            <div className="filter-carousal-video">
              <div className="container-simple">
                <h1 className="aaaaaaa">
                  الجمال مع الرفاهية
                  <span className="name-company-color"></span>
                </h1>
              </div>
              <div className="container-simple2">
                <h1 className="aaaaaaa2">حقق حلمك في اختيارك البيت المثالي</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
