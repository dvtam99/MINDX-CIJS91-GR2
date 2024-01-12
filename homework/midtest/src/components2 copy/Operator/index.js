import * as React from "react";
import Button from "@mui/material/Button";
export default function Operator({ onNumClicked }) {
  const operator = ["+", "-", "*", "/"];
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5px",
      }}
    >
      {operator.map((op, idx) => (
        <Button
          key={idx}
          variant="contained"
          onClick={() => onNumClicked("", op)}
        >
          {op}
        </Button>
      ))}
    </div>
  );
}
