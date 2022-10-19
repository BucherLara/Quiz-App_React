import Card from "./Components/Card/index.js";
import Navbar from "./Components/Navbar/index.js";
import "./global.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Quiz-App</h1>
      </header>

      <main>
        <ul className="card-list"></ul>
        <Card />
      </main>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
