import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MangaData from "../../json/Manga.json";
import { NavLink } from "react-router-dom";

export const SuggestionSlider = () => {
  return (
    <>
      <div className="container-fluid mt-5 carousel">
        <ImageSlider />
      </div>
    </>
  );
};

function ImageSlider() {
  let settings = {
    lazyLoad: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {MangaData.map((mangaDetail, index) => {
        return (
          <div className="table-card-wrapper">
            <div className="tablecard">
              <NavLink to={"/Manga/" + mangaDetail.manga_name}>
                <div className="tablecard-image">
                  <img
                    src={mangaDetail.manga_art_cover}
                    alt={mangaDetail.manga_name + " art cover"}
                  />
                  <div class="overlay">
                    <h4 class="manga-info">{mangaDetail.manga_name}</h4>
                    <p> Chapter {mangaDetail.latest_chapter}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default SuggestionSlider;
