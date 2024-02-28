import React, { useState } from "react";
import "./TradeTable.css";
import Button from "./Button";
function TradeTable({ filteredData }) {
  return (
    <div className="table-wrapper">
      <table className="trade-table">
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
                <div className="fund-body">
                  <img src={item.icon} alt="icon" width={50} />
                  <div className="fund-name">
                    <div className="fund-first-row">
                      <span>{item.investmentType}</span>
                      <span>.</span>
                      <span> {item.subCategoryName}</span>
                    </div>
                    <div className="fund-second-row">{item.fundName}</div>
                    <div className="fund-last-row">
                      <span className="span-rating">
                        {item.rating}
                        <img src="./assets/star-rate-svgrepo-com.svg" alt="rating" width={10}/>
                      </span>
                      <span className="span-growth">{item.reInvestmentPlan}</span>
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
