// import logo from "./logo.svg";
import "./App.css";
import TaskInput from "./components/TaskInput";
import Footer from "./components/Footer";
import Task from "./components/Task";

function App() {
  let taskList = ["an com", "di hoc", "di lam", "nau cowm", "di tam"];
  const onTaskChange = (task) => {
    console.log("App :" + task);
  };
  return (
    <div className="App container">
      <TaskInput onTaskChange={onTaskChange} />
      <button>Add</button>
      <div className="task-list">
        {taskList.map((task, index) => (
          <Task title={task} key={index} />
        ))}
      </div>
      <Footer taskTodo={taskList.length}></Footer>
    </div>
  );
}

export default App;
