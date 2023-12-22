const TaskInput = (props) => {
  const onClickBtn = () => {
    let value = document.getElementById("task-input").value;
    props.onTaskChange(value);
  };
  return (
    <div className="input">
      <input
        id="task-input"
        type="text"
        placeholder="Enter your task here ..."
        // onChange={(event) => {
        //   debugger;
        // console.log("taskInput: " + event.target.value);
        // props.onTaskChange(event.target.value);
        // }}
      />
      <button onClick={onClickBtn}>Add</button>
    </div>
  );
};

export default TaskInput;
