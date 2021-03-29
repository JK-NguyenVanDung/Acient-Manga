import React from "react";
import { MetaDecorator } from "../../components";

import {
  MangaSlider,
  MangaTable,
  MangaTable2,
  ReadHistory,
  SuggestionSlider,
  QuickMangaSlider,
} from "../../components";
export const Home = () => {
  return (
    <>
      <MetaDecorator title="Trang Chủ" description="HomePage" />

      <MangaSlider />
      <QuickMangaSlider />
      <div class="row mainRow">
        <div class="col ">
          <h2 class="h2">Truyện Mới Cập Nhật</h2>
          <MangaTable />
          <div class="border-top my-5"></div>
          <h2 class="h2">Truyện Cũ</h2>

          <MangaTable />
        </div>
        <div class="col-sm-4 boxHistory">
          <div class=" box" id="customScroll">
            <h2 class="h2">Lịch sử đọc</h2>
            <ReadHistory />
          </div>
        </div>
      </div>
      <div class="suggestion">
        <h2 class="h2"> Truyện Gợi Ý</h2>
        <SuggestionSlider />
      </div>
    </>
  );
};

export default Home;
