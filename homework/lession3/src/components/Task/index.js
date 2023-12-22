function Task(props) {
  let style = "none";
  if (props.isDone) {
    style = "line-through";
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={props.isDone}
        onChange={(event) => {
          debugger;
          console.log(event.target.checked);
          props.onChecked(event.target.checked, props.index);
        }}
      />
      <span style={{ textDecoration: style }}>{props.title}</span>
    </div>
  );
}
export default Task;
