const TaskInput = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter your task here ..."
        onChange={(event) => {
          //   debugger;
          console.log("taskInput: " + event.target.value);
          props.onTaskChange(event.target.value);
        }}
      />
    </div>
  );
};

export default TaskInput;
