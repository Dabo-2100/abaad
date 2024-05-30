import noImg from "../../assats/noImgPro.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";
import "./Slider.css";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Slider() {
  const [serverUrl] = useRecoilState($ServerUrl);
  let [projects, setProjects] = useState([]);
  const params = useParams()
  function getAllProjects() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects`;
    axios
      .get(server).then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllProjects();
  }, []);

  let [slideindex, setslideindex] = useState(0);

  let handleclick = (direction) => {
    if (direction === "left") {
      setslideindex(slideindex - 0.5);
    } else {
      setslideindex(slideindex + 0.5);
    }
  };

  return (
    <>
      <div className="container-slider-projects-home ">

        <div className="swiper-button-next"></div>

        <Swiper
          className="container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 50,
            },

          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Link to={`/project/${project.project_id}`}>
                <div className="wrapper-slide-item">
                  <img
                    src={project.project_cover_name ? `${serverUrl}/media/projects/${project.project_id}/${project.project_cover_name}` : noImg}
                    alt="project image"
                    className="project-image-card2 ssssss"
                  />
                  <h1 className="title-project-card2 ttitle-project-card2">{project.project_name}</h1>
                  <p className="color-text ccolor-text">{project.project_slogan}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
      </div>
    </>
  );
}
