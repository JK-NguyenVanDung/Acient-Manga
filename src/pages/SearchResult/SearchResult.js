import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import NewMangaData from "../../json/Manga.json";
import genres from "../../json/genres.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Paths, GetTable } from "../../components";
import { MetaDecorator } from "../../components";

export let selection = "";
export let defaultValue = "";
export const SortedTable = () => {
  function sort() {
    return NewMangaData.slice().sort(
      //slice() here is because im using the same json file !remove when passing the correct data
      (a, b) =>
        selection === "oldest"
          ? new Date(a.release_date) - new Date(b.release_date)
          : new Date(b.release_date) - new Date(a.release_date)
    );
  }
  return GetTable(defaultValue === "" ? sort() : NewMangaData);
};
function GenresSlider() {
  let history = useHistory();
  let settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
      {genres.map((genre, index) => {
        return (
          <div class="quickMangaBtns">
            <button
              class="btn btn-secondary quickMangaBtn"
              value={genre.value}
              onClick={(e) => history.push(e.target.value)}
            >
              {genre.name}
            </button>
          </div>
        );
      })}
    </Slider>
  );
}
export const SearchResult = () => {
  let location = useLocation();
  let dirs = location.pathname.split("/");
  let currentDir = dirs[2].replace("Truyen-", "Truyện ");

  const orderList = [
    {
      name: "Cũ Nhất",
      value: "oldest",
    },
    {
      name: "Mới Nhất",
      value: "newest",
    },
  ];

  let [selected, setSelected] = useState("");
  let [defaultVal, setdefaultVal] = useState("");

  selection = selected;
  defaultValue = defaultVal;
  return (
    <div class="row main-content">
      <MetaDecorator title="Tìm Kiếm" description="Searching" />
      <div class="col-md">
        {Paths(location.pathname)}
        <div class="currentCat">
          <h2 class="h2">{currentDir}</h2>{" "}
          <select
            class="drop-downBtn dropDown"
            onChange={(e) =>
              e.target.value === ""
                ? setdefaultVal("default")
                : setSelected(e.target.value) & setdefaultVal("")
            }
          >
            <option class="dropdown-item" value="" disabled selected hidden>
              Sắp Xếp
            </option>
            <option class="dropdown-item" value="">
              Mặt định
            </option>
            {orderList.map((item) => (
              <option class="dropdown-item" value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div class="genres-List">
          <GenresSlider></GenresSlider>
        </div>

        <div class="sorted">
          <SortedTable></SortedTable>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
