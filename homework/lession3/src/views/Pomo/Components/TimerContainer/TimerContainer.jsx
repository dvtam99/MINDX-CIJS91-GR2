import React, { useContext } from "react";
import BtnPomo from "../BtnPomo";
import { PomoCT } from "../../../../contexts";
import "./style.scss";
const TimerContainer = () => {
  const { mode } = useContext(PomoCT);

  return (
    <div className="timer-con">
      <div>
        <BtnPomo />
      </div>
      <div className="timer">{mode.timer}</div>
      <div class="btn-con">
        <button className={`btn-start ${mode.name}`}>start</button>
      </div>
    </div>
  );
};

export default TimerContainer;
