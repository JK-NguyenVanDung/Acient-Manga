import React from "react";
import { Link } from "react-router-dom";

export const Paths = (props) => {
  const dirs = props.split("/");
  let link = "";
  return (
    <div class="path">
      {dirs.map((item, index) => {
        return (
          <>
            {index === 0 ||
            index === dirs.length ||
            dirs[index] === "" ? null : (
              <span> / </span>
            )}
            <Link
              to={
                (link = // first condition
                  index === 0 || index === dirs.length - 1
                    ? dirs[index]
                    : props.replace("/" + dirs[dirs.length - 1], "") || //or
                      index === 3 // second condition
                    ? props
                        .replace("/" + dirs[index + 1], "")
                        .replace("/" + dirs[dirs.length - 1], "")
                    : null)
              }
            >
              {(item = index === 0 ? "Trang Chủ" : item)}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Paths;
