import React, { useState, createContext } from "react";
import "./base.scss"
import "./App.css";
import TaskInput from "./components/TaskInput";
import Footer from "./components/Footer";
import Task from "./components/Task";
import { PomoCT } from "./contexts";
import Header from "./components/Header";

function App() {
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
    let newArr = [...taskList];
    newArr[index].isDone = checked;
    setTaskList(newArr);
  };
  return (
    <PomoCT.Provider value={{ mode: "longBreak", timer: "25" }}>
      <PomoCT.Consumer>
        {(pomoCtx) => {
          console.log(pomoCtx)
          debugger
          return (
            <div className={`App container ${pomoCtx.mode}`}>
              <Header />
              {/* <Button variant="contained">new btn</Button> */}


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
          )
        }}

      </PomoCT.Consumer>

    </PomoCT.Provider>

  );
}

export default App;

// update lai mang ban them pro, isDone
