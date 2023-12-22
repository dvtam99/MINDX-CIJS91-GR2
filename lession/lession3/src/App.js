// import logo from "./logo.svg";

import "./App.css";
import Profile from "./component/Profile";
import Counter from "./component/Counter";
import Person from "./component/Person";
import { useState } from "react";
function App() {
  // let count = 0;
  let imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/500px-Katherine_Johnson_1983.jpg";
  const onCLickBtn = () => {
    // count = count + 1;
    setCount(count + 1);

    console.log("clicked me 12, " + count);
    document.getElementById("btn").innerText = count;
    return null;
  };

  const [count, setCount] = useState(0);

  // let count = 0;

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Counter />
        <Counter />
        <Person />
        <button onClick={onCLickBtn} id="btn">
          Click {count}
        </button>
        <Profile imgUrl={imgUrl} name={"Katherine Johnson"} />
      </header>
    </div>
  );
}

export default App;
