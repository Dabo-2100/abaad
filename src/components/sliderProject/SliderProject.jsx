import "./SliderProject.css"
export default function SliderProject(props) {
  let stylingSlider = {
    height:'70vh'
  }
    return(
        <>

        <div
            id="carouselExampleAutoplaying"
            className="carousel slide slide-carosalll"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
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
    )
}