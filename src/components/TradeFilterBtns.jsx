import React, { useState } from "react";
import "./TradeFilter.css";
function TradeFilterBtns({ category, setCategory }) {
  const btns = [
    "Top Rated",
    "High Returns",
    "Tax Saving",
    "Low Risk",
    "Sector Bets",
    "Diversified",
  ];
  return (
    <div className="tradeFilterButtons">
      {btns.map((item, index) => {
        if (category === item) {
          return (
            <button key={index} className="selectedButton default">
              {item}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="button default"
              onClick={() => {
                setCategory(item);
              }}
            >
              {item}
            </button>
          );
        }
      })}
    </div>
  );
}

export default TradeFilterBtns;
