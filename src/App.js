//import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/menu.css";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  // const title = "Global IT";
  // const title_style = { color: "#f00", fontSize: "30px" };

  return (
    // JSX (html과 매우 유사한 형식)
    <div className="App">
      {/* 메뉴 */}
      <div id="header">
        <ul id="nav">
          {/* <li id="apple">&nbsp;</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV&amp;Home</li>
          <li>Only on Apple</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>

      {/* 본문 JSX에서 변수 사용 및 스타일 주기 위아래 문장 동일*/}
      {/* <h2 style={{ color: "#f00", fontSize: "30px" }}>{title}</h2>
      <h2 style={title_style}>{title}</h2> */}
    </div>
  );
}

export default App;
