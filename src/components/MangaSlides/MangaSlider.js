import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MangaData from "P:\\TruyenTranh9x\\truyen-tranh-9x\\src\\json\\Manga.json";
import { Link } from "react-router-dom";

export const MangaSlider = () => {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    centerMode: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
          <div className="card-wrapper">
            <div className="card">
              <Link to={"/Manga/" + mangaDetail.manga_name}>
                <div className="card-image">
                  <img
                    src={mangaDetail.manga_art_cover}
                    alt={mangaDetail.manga_name + " art cover"}
                  />
                </div>

                <ul className="episode-numb">
                  <li>
                    <Link
                      to={
                        "/Manga/" +
                        mangaDetail.manga_name +
                        "/C" +
                        mangaDetail.latest_chapter
                      }
                    >
                      <i className="fa">C{mangaDetail.latest_chapter}</i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/Manga/" +
                        mangaDetail.manga_name +
                        "/C" +
                        (mangaDetail.latest_chapter - 1)
                      }
                    >
                      <i className="fa ">C{mangaDetail.latest_chapter - 1}</i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/Manga/" +
                        mangaDetail.manga_name +
                        "/C" +
                        (mangaDetail.latest_chapter - 2)
                      }
                    >
                      <i className="fa">C{mangaDetail.latest_chapter - 2}</i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Manga/" + mangaDetail.manga_name + "/C1"}>
                      <i className="fa">C1</i>
                    </Link>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    {mangaDetail.manga_name}
                    <span className="author"> {mangaDetail.manga_author}</span>
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default MangaSlider;
