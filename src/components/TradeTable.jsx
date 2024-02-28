import React, { useState } from "react";
import "./TradeTable.css";
import Button from "./Button";
function TradeTable({ filteredData }) {
  return (
    <div className="tableWrapper">
      <table className="tradeTable">
        <thead>
          <tr>
            <td>Fund</td>
            <td>1Y Returns</td>
            <td>3Y Returns</td>
            <td>5Y Returns</td>
            <td>Current Nav</td>
            <td>Min SIP Investment</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.fundName}>
              <td>
                <div className="fundBody">
                  <img src={item.icon} alt="icon" width={50} />
                  <div className="fundName">
                    <div className="fundFirstRow">
                      <span>{item.investmentType}</span>
                      <span>.</span>
                      <span> {item.subCategoryName}</span>
                    </div>
                    <div className="fundSecondRow">{item.fundName}</div>
                    <div className="fundLastRow">
                      <span className="spanRating">
                        {item.rating}
                        <img src="./assets/star-rate-svgrepo-com.svg" alt="rating" width={10}/>
                      </span>
                      <span className="spanGrowth">{item.reInvestmentPlan}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.oneYrReturn}</td>
              <td>{item.threeYrReturn}</td>
              <td>{item.fiveYrReturn}</td>
              <td>{item.currentNav}</td>
              <td>{item.minSipInvestment}</td>
              <td>
                <Button />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradeTable;
