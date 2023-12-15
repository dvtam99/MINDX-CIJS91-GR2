import logo from "./logo.svg";
import "./App.css";

const SearchInput = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Enter your task here ..." />
    </div>
  );
};

function Task(props) {
  return (
    <div>
      <input type="radio" />
      <span>{props.title}</span>
    </div>
  );
}

const Footer = (props) => {
  return (
    <div>
      <span>{props.taskTodo} Tasks left!!</span>
      <span>MindX</span>
    </div>
  );
};

function App() {
  let taskList = ["an com", "di hoc", "di lam", "nau cowm", "di tam"];
  return (
    <div className="App container">
      <SearchInput />
      <div className="task-list">
        {taskList.map((task) => (
          <Task title={task} />
        ))}
      </div>
      <Footer taskTodo={taskList.length}></Footer>
    </div>
  );
}

export default App;
