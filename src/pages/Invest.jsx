import React from 'react'
import Overview from '../components/Overveiw'
import CalculateReturns from '../components/CalculateReturns';
import DoughnutChart from '../components/DoughnutChart';
import YourInvestmentPad from '../components/YourInvestmentPad';
import "./Invest.css";
function Invest(props) {

  const fundKey = "sixTwo";
  return (
    <div className='main-invest'>
      <div className='overview-section'>
        <Overview fundKey = {fundKey} />
        <CalculateReturns fundKey = {fundKey} />
        
      </div>
      <YourInvestmentPad />
    </div>
  )
}

export default Invest