import { useRecoilState } from "recoil";
import "./SliderProject.css";
import { $ServerUrl } from "../../store";

export default function SliderProject(props) {
  let stylingSlider = {
    height: "70vh",
  };

  const [serverUrl] = useRecoilState($ServerUrl);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide slide-carosalll"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {props.imgs ? (
            props.imgs.data ? (
              props.imgs.data.map((photo, index) => {
                return (
                  <div
                    className={`carousel-item ${index == 0 ? "active" : null}`}
                    key={index}
                  >
                    <img
                      src={
                        serverUrl.includes("localhost")
                          ? serverUrl.split("/api")[0] + photo.attributes.url
                          : photo.attributes.url
                      }
                      className="d-block w-100 styles-sliderr"
                      alt="..."
                      style={props.stylingSlider && stylingSlider}
                    />
                  </div>
                );
              })
            ) : (
              <>
                <div className="carousel-item active">
                  <img
                    src={require("../../assats/a1.jpg")}
                    className="d-block w-100 styles-sliderr"
                    alt="..."
                    style={props.stylingSlider && stylingSlider}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assats/a2.jpg")}
                    className="d-block w-100 styles-sliderr"
                    alt="..."
                    style={props.stylingSlider && stylingSlider}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assats/a3.jpg")}
                    className="d-block w-100 styles-sliderr"
                    alt="..."
                    style={props.stylingSlider && stylingSlider}
                  />
                </div>
              </>
            )
          ) : null}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
