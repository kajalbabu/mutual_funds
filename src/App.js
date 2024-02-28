import './App.css';
import Trade from './pages/Trade';
import React, { useState } from "react";
import OrderBook from './pages/OrderBook';


function App() {
  
  var buttonStyles = {
    backgroundColor: 'lightblue',
    color: 'black'
  };


  const [isTradeVisible, setIsTradeVisible] = useState(true);
  const [isOrderBookVisible, setIsOrderBookVisible] = useState(false);


  const hideTradeComponent = () =>{
    setIsTradeVisible(false);
    setIsOrderBookVisible(true);
  }
  const hideOrderBookComponent = () =>{
    setIsOrderBookVisible(false);
    setIsTradeVisible(true);
  }


  return (
  
    <div className="App">
      <header>
      <button style={buttonStyles} onClick={hideOrderBookComponent}>Trade</button>
      <button style={buttonStyles} onClick={hideTradeComponent}>OrderBook</button>
    </header>
      {isOrderBookVisible && <OrderBook/>}
      {isTradeVisible && <Trade/>}

    </div>
  );
}

export default App;
