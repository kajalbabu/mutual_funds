import React from "react";
import "./InvestButtons.css"

function InvestButtons({ investButton, setInvestButton }) {
  const investBtns = [
    "Overview",
    "Scheme Details",
    "Fund Holdings",
    "Peer Comparison",
  ];
  return (
    <div className="invest-filter-buttons">
      {investBtns.map((item,index) => {
        if (item === investButton) {
          return <button key={index} className="selected-invest-button invest-button">{item}</button>;
        }else{
            return <button className="invest-button" onClick={()=>{setInvestButton(item)}}>{item}</button>
        }
      })}
    </div>
  );
}

export default InvestButtons;
