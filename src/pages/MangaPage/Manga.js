import React from "react";
import singleManga from "P:\\TruyenTranh9x\\truyen-tranh-9x\\src\\json\\singleManga.json";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import ReadMore from "./ReadMore";
import { Paths, CommentSec } from "../../components";
import { MetaDecorator } from "../../components";

export const Manga = () => {
  return (
    <>
      <MetaDecorator
        title={singleManga.manga_name}
        description={singleManga.manga_name}
      />
      <div class="main-content manga-info-box">
        <BasicInfo />
        <ChapterMenu />
      </div>
      <div class="main-content comment-box">
        <CommentSec mangaComments={singleManga.comments} />
      </div>
    </>
  );
};

export default Manga;

export const BasicInfo = () => {
  let location = useLocation();
  let history = useHistory();
  return (
    <div class="basicInfo">
      {Paths(location.pathname)}
      <div class="row">
        <div class="col-md-4 cover-image ">
          <img
            src={singleManga.manga_art_cover}
            alt={singleManga.manga_name + " art cover"}
          />
        </div>
        <div class="col-md-8">
          <h1 class="Manga_Title">{singleManga.manga_name}</h1>
          <h4 class="Manga_Author">Tác giả: {singleManga.manga_author}</h4>
          <p class="Chapter_Counts">
            Tổng số chương: {singleManga.latest_chapter}{" "}
          </p>
          <p class="Status">Tình trạng: {singleManga.status}</p>
          <ul class="buttons-list">
            <li class="buttons" key="01">
              <button
                type="button"
                class="btn btn-outline-danger btn-lg"
                onClick={() => {
                  history.push(singleManga.chapter_urls[0]);
                }}
              >
                Đọc Từ Đầu
              </button>
            </li>
            <li class="buttons" key="02">
              <button
                type="button"
                class="btn btn-outline-success btn-lg "
                onClick={() => {
                  history.push(
                    singleManga.chapter_urls[
                      singleManga.chapter_urls.length - 1
                    ]
                  );
                }}
              >
                Đọc Chapter Mới Nhất
              </button>
            </li>
            <li class="buttons" key="03">
              <button
                type="button"
                class="btn btn-outline-primary  btn-lg"
                onClick={() => {
                  history.push(singleManga.user_last_read);
                }}
              >
                Đọc Tiếp
              </button>
            </li>
          </ul>
          <div class="description">
            <h3 class="desc">Miêu Tả</h3>
            <ReadMore
              text={singleManga.description}
              numberOfLines={8}
              lineHeight={2}
              showLessButton={true}
              onContentChange={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChapterMenu = () => {
  return (
    <div class="chapter-menu">
      <h2>Danh sách chương</h2>
      <div class="card chapter">
        <ul class="list-group list-group-flush list-chapter">
          {singleManga.chapter_names.map((chapter, index) => {
            return (
              <li class="list-group-item" key={index}>
                <Link to={singleManga.chapter_urls[index]}>{chapter}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
