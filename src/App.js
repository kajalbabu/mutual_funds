import './App.css';
import { useState } from 'react';
import OrderBook from './pages/OrderBook';
import Trade from './pages/Trade';
import Table from './components/Table';
function App() {
  
  var buttonStyles = {
    backgroundColor: 'white',
    color: 'blue'
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
      {isOrderBookVisible && <Table/>}
      {isTradeVisible && <Trade/>}

    </div>
  );
}

export default App;
