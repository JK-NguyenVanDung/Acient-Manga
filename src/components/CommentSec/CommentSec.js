import React, { useState, useContext } from "react";

import { FaClock, FaReply, FaThumbsUp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import IconButton from "@material-ui/core/IconButton";

import { Button, TextField } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { UserContext } from "../../UserContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export const CommentSec = ({ mangaComments }) => {
  const [comments, setComments] = useState(mangaComments);

  let commentCount = Object.keys(mangaComments).length;
  return (
    <>
      <h2>Bình Luận ({commentCount})</h2>
      <InputSec
        submitHandler={(value) => setComments(mangaComments.unshift(value))}
      ></InputSec>
      <CommentsList comments={mangaComments}></CommentsList>
      <div class="materialBtnCont">
        <Button variant="contained" size="large" color="primary">
          Đọc Thêm
        </Button>
      </div>
    </>
  );
};
export default CommentSec;

export const InputSec = (props) => {
  const { user } = useContext(UserContext);

  let initState = {
    name: user.username,
    email: user.email,
    comment: "",
    like: 0,
    date: new require("moment")().format("YYYY-MM-DD HH:mm"),
    avatar: user.imageUrl,
    reply: [],
    userError: "",
  };
  const [details, setDetails] = useState(initState);
  const [error, setError] = useState(false);
  const validate = (e) => {
    if (e) {
      setError(true);
      setDetails({
        ...details,
        userError: "Xin vui lòng đăng nhập để bình luận",
      });
    }
  };
  const submitHandler = (e) => {
    // props.isReply != true  ?  insert API  comment pull request here
    //if it is just a comment  => insert API reply pull request otherwise
    e.preventDefault();

    props.submitHandler(details);
    setDetails(initState);
  };

  return (
    <div class="input-group commentSec">
      <TextField
        variant="outlined"
        className="input-com"
        multiline
        rows={4}
        placeholder="Nhập bình luận"
        onChange={(e) => setDetails({ ...details, comment: e.target.value })}
        value={details.comment}
        id="customScroll"
        error={error}
        id="standard-error-helper-text"
        helperText={details.userError}
        InputProps={{
          endAdornment: (
            <label>
              <IconButton
                color="primary"
                component="span"
                type="submit"
                disabled={details.comment === "" ? true : false}
                onClick={(e) => (user ? submitHandler(e) : validate(true))}
                className="iconBtn"
              >
                <FiSend></FiSend>
              </IconButton>
            </label>
          ),
        }}
      ></TextField>
    </div>
  );
};

export const CommentsList = ({ comments }) => {
  return (
    <ul class="comments-list">
      {comments.map((comment, index) => {
        return (
          <>
            <li class="comment" key={index}>
              <CommentCard comment={comment}></CommentCard>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export const LikeBtn = (props) => {
  const [like, isLiked] = useState(false);
  let likeState = props.comment.like;
  console.log(likeState);

  const likeChange = () => {
    //here I return the likeState back to the comment it came from so you can return the comment with a pull API
    //But i think you should put ur pull request this likeState directly from here.
    props.likeChange(likeState);
  };

  return (
    <button
      class={like === true ? "clear-Btn like-Btn" : "clear-Btn"}
      onClick={() => isLiked(!like)}
    >
      <FaThumbsUp class="thumbUp"></FaThumbsUp>
      <span class="like_numb" onChange={likeChange}>
        {(likeState = like === true ? likeState + 1 : props.comment.like)}
      </span>
    </button>
  );
};

export const CommentCard = ({ comment }) => {
  const [inCom, setComment] = useState(comment);
  const [reply, replySelected] = useState(false);
  return (
    <>
      <CommentBox comment={comment}></CommentBox>
      <div class="replySec">
        <button class="clear-Btn" onClick={() => replySelected(!reply)}>
          Trả lời <FaReply class="replyI"></FaReply>
        </button>
        <LikeBtn
          comment={comment}
          likeChange={(value) => comment.like === value}
        ></LikeBtn>
      </div>
      {reply ? (
        <div class="reply-In">
          <InputSec
            isReply={true}
            submitHandler={(value) =>
              delete value.reply && setComment(comment.reply.push(value))
            }
          ></InputSec>
        </div>
      ) : null}
      {comment.reply === null ? null : (
        <ul class="comments-list replyList">
          {comment.reply.map((repCom, index) => {
            return (
              <li class="comment" key={index}>
                <CommentBox comment={repCom}></CommentBox>
                <div class="replySec">
                  <LikeBtn
                    comment={repCom}
                    likeChange={(value) => comment.like === value}
                  ></LikeBtn>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export const CommentBox = ({ comment }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div class="commentBox">
      <div class="">
        <Avatar
          variant="rounded"
          src={comment.avatar}
          alt="avatar"
          class="avatarImg"
        ></Avatar>
      </div>
      <div class="card commentCard">
        <div class="row comment-info">
          <h5 class="name">{comment.name}</h5>
          <FaClock class="icon" />
          <span class="date-time">
            {new Date(comment.date).toLocaleString("vi", {
              hour12: false,
              hour: "numeric",
              minute: "numeric",
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </span>
          <div class="dropDownReport">
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              aria-label="delete"
              component="span"
              onClick={handleClick}
            >
              <ArrowDropDownIcon fontSize="small" />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Báo cáo</MenuItem>
            </Menu>
          </div>
        </div>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};
