import React from "react";
import ThemeContext from "../../context/ThemeContext";
const Display = ({ num2 }) => {
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
            {num2}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Display;
