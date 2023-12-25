import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
function Task(props) {
  let style = "none";
  if (props.isDone) {
    style = "line-through";
  }
  return (
    <div>
      <Checkbox
        // {...label}
        checked={props.isDone}
        onChange={(event) => {
          debugger;
          console.log(event.target.checked);
          props.onChecked(event.target.checked, props.index);
        }}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        sx={{
          color: "red",
          "&.Mui-checked": {
            color: "#F5B7B1",
          },
        }}
      />
      <span style={{ textDecoration: style }}>{props.title}</span>
    </div>
  );
}
export default Task;
