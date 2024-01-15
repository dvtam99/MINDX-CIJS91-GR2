import React, { useState } from "react";

import TaskInput from "../../components/TaskInput";
import Footer from "../../components/Footer";
import Task from "../../components/Task";
import { PomoCT } from "../../contexts";
import Header from "../../components/Header";
import BtnPomo from "./Components/BtnPomo";

function Pomo() {
  const [taskList, setTaskList] = useState([
    { isDone: false, taskName: "Danh rang" },
    { isDone: true, taskName: "An sang" },
  ]);

  const onTaskChange = (task) => {
    let newArr = [...taskList];
    newArr.push({ isDone: false, taskName: task });
    setTaskList(newArr);
  };

  const onChecked = (checked, index) => {
    let newArr = [...taskList];
    newArr[index].isDone = checked;
    setTaskList(newArr);
  };

  const listMode = [
    { name: "pomodoro", timer: 25 },
    { name: "shortBreak", timer: 5 },
    { name: "longBreak", timer: 10 },
  ];

  const [mode, setMode] = useState({ name: "pomodoro", timer: 25 });

  return (
    <PomoCT.Provider value={{ mode, setMode, listMode }}>
      <PomoCT.Consumer>
        {(pomoCt) => {
          return (
            <div className={`Pomo App container ${pomoCt.mode.name}`}>
              <Header />
              <BtnPomo />
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
        }}
      </PomoCT.Consumer>
    </PomoCT.Provider>
  );
}

export default Pomo;
