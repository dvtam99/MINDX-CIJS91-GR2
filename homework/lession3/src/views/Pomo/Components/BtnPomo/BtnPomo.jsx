import React, { useContext } from "react";
import { PomoCT } from "../../../../contexts";
import { Button } from "@mui/material";
const BtnPomo = () => {
  const { setMode, listMode = [] } = useContext(PomoCT);

  return (
    <div>
      {listMode.map((btn) => (
        <Button
          onClick={() => setMode(btn)}
          key={btn.name}
          className={btn.name}
        >
          {btn.name}
        </Button>
      ))}
    </div>
  );
};

export default BtnPomo;
