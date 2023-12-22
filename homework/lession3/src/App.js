import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import Footer from "./components/Footer";
import Task from "./components/Task";

function App() {
  // let taskList = ["an com", "di hoc", "di lam", "nau cowm", "di tam"];
  const [taskList, setTaskList] = useState([
    { isDone: false, taskName: "Danh rang" },
    { isDone: true, taskName: "An sang" },
  ]);

  const onTaskChange = (task) => {
    let newArr = [...taskList];
    newArr.push({ isDone: false, taskName: task });
    // let newArr = [...taskList, task];
    setTaskList(newArr);
  };

  const onChecked = (checked, index) => {
    debugger;
    let newArr = [...taskList];
    newArr[index].isDone = checked;
    setTaskList(newArr);
  };
  return (
    <div className="App container">
      <TaskInput onTaskChange={onTaskChange} />

      <div className="task-list">
        {taskList.map((task, index) => (
          <Task
            title={task.taskName}
            isDone={task.isDone}
            key={index}
            index={index}
            onChecked={onChecked}
          />
        ))}
      </div>
      <Footer taskTodo={taskList.length}></Footer>
    </div>
  );
}

export default App;

// update lai mang ban them pro, isDone
