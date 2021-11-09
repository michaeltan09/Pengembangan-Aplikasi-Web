import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";

function App() {
  const name = <i>Lannister</i>;
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 style={{ color: "rgb(252, 146, 158)", marginBottom: "20px" }}>
        Hello, {name}
      </h2>
      <p style={{ color: "rgb(197, 165, 197)" }}>Toko Online</p>
      <Component />
    </div>
  );
}

export default App;
