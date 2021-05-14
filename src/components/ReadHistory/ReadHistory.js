import React from "react";
import MangaData from "../../json/Manga.json";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
export const ReadHistory = () => {
  return (
    <>
      <GetReadHistory />
    </>
  );
};
function GetReadHistory() {
  return MangaData.map((mangaDetail, index) => {
    return (
      <div class="row historyRow">
        {" "}
        <div class="col-md">
          {" "}
          <div className="history-wrapper">
            <div className="historycard">
              <Link to={"/Manga/" + mangaDetail.manga_name}>
                <div className="historycard-image">
                  <img
                    src={mangaDetail.manga_art_cover}
                    alt={mangaDetail.manga_name + " art cover"}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md history-content">
          <h4>{mangaDetail.manga_name}</h4>
          <p>{mangaDetail.manga_author}</p>
          <p>Đã đọc chapter {mangaDetail.latest_chapter}</p>
          <Button
            variant="contained"
            size="large"
            color="primary"
            classes="contRead-btn"
          >
            <Link class="link" to={"/Manga/" + mangaDetail.manga_name}>
              đọc tiếp{" "}
            </Link>
          </Button>
        </div>
      </div>
    );
  });
}
export default ReadHistory;
