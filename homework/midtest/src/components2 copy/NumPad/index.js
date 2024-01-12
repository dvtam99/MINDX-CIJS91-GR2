import React from "react";
import Button from "@mui/material/Button";
const NumPad = ({ onNumClicked }) => {
  const btn = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "C"];
  return (
    <div style={{ maxWidth: "100%", display: "flex" }}>
      <div style={{ maxWidth: "75%" }}>
        {btn.map((op, idx) => (
          <Button
            variant="outlined"
            key={idx}
            style={{ marginRight: "11px", marginBottom: "5px" }}
            onClick={() => onNumClicked(op)}
          >
            {op}
          </Button>
        ))}
      </div>
      <Button
        variant="contained"
        color="success"
        style={{ marginRight: "11px", marginBottom: "5px" }}
        onClick={() => onNumClicked("", "=")}
      >
        =
      </Button>
    </div>
  );
};

export default NumPad;
