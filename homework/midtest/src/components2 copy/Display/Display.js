import React from "react";
import ThemeContext from "../../context/ThemeContext";
const Display = (props) => {
  return (
    <ThemeContext.Consumer>
      {(themeCtx) => {
        return (
          <div
            className="display"
            style={{
              backgroundColor: themeCtx.theme === "light" ? "white" : "black",
              color: themeCtx.theme === "light" ? "black" : "white",
            }}
          >
            {props.display}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Display;
