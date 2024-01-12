import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Operator from "./components/Operator";
import NumPad from "./components/NumPad";
import ThemeContext from "./context/ThemeContext";
import { Switch } from "@mui/material";

import "./App.css";

function App() {
  const [num2, setNum2] = useState("0");
  const [num1, setNum1] = useState("0");
  const [operator, setOperator] = useState("");
  const [theme, setTheme] = useState({ theme: "light" });

  function InputNumber(input) {
    debugger;
    //
    if (String(num2).endsWith(".") && input == ".") {
      return;
    }

    if (num2 === "0") {
      setNum2(input);
    } else {
      setNum2(num2 + input);
    }
    // }
  }

  function Clear() {
    setNum2("0");
    setNum1("0");
    setOperator("");
  }

  function Operation(operatorInput) {
    debugger;
    // if (operator) {
    // } else {
    // let operatorInput = e;
    if (operator) {
      setNum2(eval(num1 + operator + num2));
    }
    setOperator(operatorInput);

    setNum1(num2);
    setNum2("0");
    // }
  }

  function Calculate() {
    debugger;

    if (operator) setNum2(eval(num1 + operator + num2));
    // setNum1(eval(num1 + operator + num2));
    // setNum1("");
    // setOperator("");
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App container">
        <Switch
          checked={theme == "light" ? true : false}
          onChange={(e) => {
            setTheme(!e.target?.checked ? "dark" : "light");
          }}
        ></Switch>
        <div className="caculator">
          <Display num2={num2} />
          <div className="body-cal">
            <div>
              <Operator Operation={Operation} />
              <NumPad
                InputNumber={InputNumber}
                Clear={Clear}
                Calculate={Calculate}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
