import React, { useState, useEffect } from "react";

import NewMangaData from "P:\\TruyenTranh9x\\truyen-tranh-9x\\src\\json\\Manga.json";
import OldMangaData from "P:\\TruyenTranh9x\\truyen-tranh-9x\\src\\json\\OldManga.json";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
export const MangaTable = () => {
  return GetTable(NewMangaData);
};
export const MangaTable2 = () => {
  return GetTable(OldMangaData);
};
export function GetTable(data) {
  const [tables, setTable] = useState(data.slice(0, data.length));
  // useEffect(() => {
  //   const fetchTables = async () => {
  //     setLoading(true);
  //     let res = data;
  //     setTable(res);
  //     setLoading(false);
  //   };
  //   fetchTables();
  // }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const tablesPerPage = 20;

  const pageVisited = currentPage * tablesPerPage;

  const displayTables = tables.slice(pageVisited, pageVisited + tablesPerPage);

  const pageCount = Math.ceil(tables.length / tablesPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <>
      <div class="row">
        {displayTables.map((mangaDetail, index) => {
          return (
            <div className="table-card-wrapper">
              <div className="tablecard">
                <Link to={"/Manga/" + mangaDetail.manga_name}>
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
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div class=" paginationCont">
        <ReactPaginate
          previousLabel={<MdNavigateBefore />}
          nextLabel={<MdNavigateNext />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
export default MangaTable;
