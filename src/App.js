import "./App.css";
import { useState } from "react";
import OrderBook from "./pages/OrderBook";
import Trade from "./pages/Trade";
import Table from "./components/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invest from "./pages/Invest/Invest";
import { Link } from "react-router-dom";

function App() {
  var buttonStyles = {
    backgroundColor: "white",
    color: "blue",
  };

  return (
    <div className="App">
      <Router>
        <header>
          <Link to={"/"}>
            <button style={buttonStyles}>Trade</button>
          </Link>
          <Link to={"/order"}>
            <button style={buttonStyles}>Order Book</button>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Trade />} />
          <Route path="/order" element={<Table />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
