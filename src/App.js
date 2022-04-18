import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
