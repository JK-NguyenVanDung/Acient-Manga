import React, { useState, handleSubmit } from "react";
import genres from "../../json/genres.json";
import { Checkbox } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import moment from "moment";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Dropzone } from "../../components";
export const UploadManga = (props) => {
  let initState = {
    title: "",
    author: "",
    chapter: "",
    publishedYear: "",
    genres: [],
    images: [],
  };
  const [details, setDetails] = useState(initState);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);
    // push this details
  };

  const [selectedDate, setSelectedDate] = useState(new Date("1990-01-01"));

  const getCheckBoxValue = (e) => {
    let data = details.genres;
    data.push(e.target.value);
    setDetails({ ...details, genres: data });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDetails({
      ...details,
      publishedYear: moment(date).format("YYYY-MM-DD"),
    });
  };

  const getFiles = (e) => {
    let data = details.images;
    data.push(e);
    setDetails({ ...details, images: data });
  };
  return (
    <div class="main-content  input-group commentSec ">
      <form class="info-sec" onSubmit={handleSubmit}>
        <h2>Upload Truyện</h2>
        <div class="input-group">
          <span class="spacing upload">Nhập tên truyện</span>
          <input
            class="input-info in-Upload"
            placeholder="Tên truyện"
            onChange={(e) => setDetails({ ...details, title: e.target.value })}
            value={details.title}
          ></input>
        </div>
        <div class="input-group">
          <span class="spacing upload ">Nhập tác giả</span>
          <input
            class="input-info in-Upload"
            placeholder="Tên tác giả"
            onChange={(e) => setDetails({ ...details, author: e.target.value })}
            value={details.author}
          ></input>
        </div>
        <div class="input-group">
          <span class="spacing upload ">Nhập chapter</span>
          <input
            class="input-info in-Upload"
            placeholder="Tên và số chapter"
            onChange={(e) =>
              setDetails({ ...details, chapter: e.target.value })
            }
            value={details.chapter}
          ></input>
        </div>
        <div class="input-group datePicker">
          <span class="spacing upload year">Nhập năm phát hành</span>
          <div class="datePicker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <div class="input-group">
          <span class="spacing upload ">Chọn thể loại</span>
          <div class="checkBoxGroup">
            {genres.map((genre, index) => {
              return (
                <label>
                  {genre.name}
                  <Checkbox
                    value={genre.name}
                    inputProps={{ "aria-label": genre.name }}
                    onChange={(e) => getCheckBoxValue(e)}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div class="dropZone">
          <Dropzone onUploaded={(file) => getFiles(file)}></Dropzone>
        </div>
        <div class="materialBtnCont">
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadManga;
