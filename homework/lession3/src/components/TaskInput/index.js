import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TaskInput = (props) => {
  const [taskName, setTaskName] = useState("");
  const onClickBtn = () => {
    // let value = document.getElementById("task-input").value;
    props.onTaskChange(taskName);
    setTaskName("");
  };
  return (
    <div className="input">
      <TextField
        id="standard-basic"
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
        variant="standard"
        placeholder="Enter your task here ..."
      />
      {/* <input
        id="task-input"
        type="text"
        placeholder="Enter your task here ..."
        // onChange={(event) => {
        //   debugger;
        // console.log("taskInput: " + event.target.value);
        // props.onTaskChange(event.target.value);
        // }}
      /> */}
      <Button onClick={onClickBtn}>Add</Button>
    </div>
  );
};

export default TaskInput;
