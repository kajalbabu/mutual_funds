import React, { useEffect, useState } from 'react'
import './TradeFilter.css'
function TradeFilter() {
  const [color,setColor]= useState("white")
  
  return (
    <div className='tradeFilter'>
        <h2>Explore Mutual Funds</h2>
    <div className='tradeFilterButtons'>
        <button>Top Rated</button>
        <button>High Returns</button>
        <button>Tax Savings</button>
        <button>Low Risk</button>
        <button>Sector Bets</button>
        <button>Diversified</button>
    </div>
    <div className='tradeFilterSearch'>
    <input type='search' placeholder='Search Schemes'></input>
    </div>
    </div>
  )
}

export default TradeFilter