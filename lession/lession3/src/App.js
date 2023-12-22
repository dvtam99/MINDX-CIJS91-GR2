// import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";

function App() {
  let imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/500px-Katherine_Johnson_1983.jpg";
  const onCLickBtn = () => {
    console.log("clicked me");
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onCLickBtn}>Click</button>
        <Profile imgUrl={imgUrl} name={"Katherine Johnson"} />
      </header>
    </div>
  );
}

export default App;
