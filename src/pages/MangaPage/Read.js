import React, { useState } from "react";
import Chapter from "P:\\TruyenTranh9x\\truyen-tranh-9x\\src\\json\\NarutoChapter01.json";
import { Link } from "react-router-dom";
import { useLocation, useParams, useHistory } from "react-router";
import { Paths, CommentSec } from "../../components";
import { MetaDecorator } from "../../components";

export const NavManga = () => {
  let location = useLocation();
  let history = useHistory();
  let { chapter } = useParams();
  function moveToLink(link) {
    history.push(link);
  }
  return (
    <div class="card nav-card">
      {Paths(location.pathname)}
      <h2 class="manga-title">
        {Chapter.manga_name} Chapter {Chapter.chapter_numb} -{" "}
        {Chapter.chapter_title}{" "}
      </h2>
      <ul class="buttons-list">
        <li class="buttons" key="0">
          <button
            type="button"
            value={Chapter.previous_chap_link}
            class="btn btn-outline-primary btn-lg "
            onClick={(e) => moveToLink(e.target.value)}
          >
            Chap Trước
          </button>
        </li>
        <li class="buttons dropdown" key="1">
          <select
            class="custom-select drop-downBtn"
            defaut_value={Chapter.chapter_numb}
            onChange={(e) => {
              moveToLink(e.target.value);
            }}
          >
            {Chapter.chapters_numb.map((chapter, index) => {
              return (
                <option value={Chapter.chapters_link[index]}>
                  Chapter {Chapter.chapters_numb[index]}
                </option>
              );
            })}
          </select>
        </li>
        <li class="buttons" key="3">
          <button
            type="button"
            value={Chapter.next_chap_link}
            class="btn btn-outline-primary btn-lg chap-button"
            onClick={(e) => moveToLink(e.target.value)}
          >
            Chap Sau
          </button>
        </li>
      </ul>
    </div>
  );
};
export const Read = () => {
  return (
    <>
      <MetaDecorator
        title={Chapter.chapter_title}
        description={
          Chapter.chapter_title +
          " is the " +
          Chapter.chapter_numb +
          " of " +
          Chapter.manga_name
        }
      />

      <NavManga />
      <ul class="images-list">
        {Chapter.images.map((image, index) => {
          return <img class="img" src={Chapter.images[index]} />;
        })}
      </ul>
      <NavManga />
      <div class="main-content manga-info-box">
        <CommentSec mangaComments={Chapter.comments} />
      </div>
    </>
  );
};

export default Read;
