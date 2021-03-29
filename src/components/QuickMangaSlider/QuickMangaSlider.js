import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MangaData from "P:\\TruyenTranh9x\\truyen-tranh-9x\\src\\json\\Manga.json";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export const QuickMangaSlider = () => {
  return (
    <>
      <div className="container-fluid carousel quickMg-Con">
        <div class="quickMangaSlider">
          <MGSlider />
        </div>
      </div>
    </>
  );
};

function MGSlider() {
  const history = useHistory();
  let settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 10,
    cssEase: "ease-out",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {MangaData.map((mangaDetail, index) => {
        return (
          <div class="quickMangaBtns">
            <button
              class="btn btn-secondary quickMangaBtn"
              value={"/Manga/" + mangaDetail.manga_name}
              onClick={(e) => history.push(e.target.value)}
            >
              {mangaDetail.manga_name}
            </button>
          </div>
        );
      })}
    </Slider>
  );
}

export default QuickMangaSlider;
