import React, { useState, useEffect } from "react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const Pagination = ({ tablesPerPage, totalTables, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTables / tablesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul class="pagination">
        <a class="page-link" onClick={() => paginate(1)} href={"trang-" + 1}>
          <BiFirstPage />
        </a>
        <a class="page-link">
          <MdNavigateBefore />
        </a>
        {pageNumbers.map((number) => (
          <li key={number} class="page-item">
            <a
              onClick={() => paginate(number)}
              href={"trang-" + number}
              class="page-link"
            >
              {number}
            </a>
          </li>
        ))}{" "}
        <a class="page-link">
          <MdNavigateNext />
        </a>{" "}
        <a
          class="page-link"
          onClick={() => paginate(pageNumbers.length)}
          href={"trang-" + pageNumbers.length}
        >
          <BiLastPage />
        </a>
      </ul>
    </nav>
  );
};

export default Pagination;
