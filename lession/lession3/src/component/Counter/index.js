import React from "react";
import { useState } from "react";

const Counter = () => {
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];
  const handleClickIncrease = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log("count: ", count);
  };
  const handleClickDecrease = () => {
    // count = count + 1;
    if (count >= 1) setCount(count - 1);
    console.log("count: ", count);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
