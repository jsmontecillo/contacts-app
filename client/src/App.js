import "./App.css";
import Home from "./components/pages/home.js";
import iPhone from './iphone.png';

function App() {
  return (
    <div className="App">
      <img src={iPhone} alt="iphone" style={{height: "700px", zIndex: "6"}}/>
      <Home />
    </div>
  );
}

export default App;
