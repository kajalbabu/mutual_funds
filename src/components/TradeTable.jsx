import React from "react";
import "./TradeTable.css";
import Button from "./Button";
function TradeTable() {
  const data = [
    {
      icon: "./assets/hdfc-bank-logo.svg",
      exchange: "Equity",
      capitalizations: "SMALL CAP FUND",
      fundName: "Quant Small Cap Fund Growth Regular Plan",
      rating: "4",
      growth: "Growth",
      category: "Top Rated",
      oneYrReturn: "73.99%",
      threeYrReturn: "45.71%",
      fiveYrReturn: "38.69%",
      currentNav: "₹243.86",
      minSipInvestment: "₹1000",
    },
    {
      icon: "./assets/hdfc-bank-logo.svg",
      exchange: "Equity",
      capitalizations: "MID CAP FUND",
      fundName: "HDFC Mid Cap Opportunities Fund Growth Plan",
      rating: "4",
      growth: "Growth",
      category: "Top Rated",
      oneYrReturn: "57.79%",
      threeYrReturn: "30.24%",
      fiveYrReturn: "25.86%",
      currentNav: "₹158.49",
      minSipInvestment: "₹100",
    },
    {
      icon: "./assets/hdfc-bank-logo.svg",
      exchange: "Equity",
      capitalizations: "FLEXI CAP FUND",
      fundName: "HDFC Flexi Cap Fund Growth Plan",
      rating: "4",
      growth: "Growth",
      category: "Top Rated",
      oneYrReturn: "45.52%",
      threeYrReturn: "25.52%",
      fiveYrReturn: "21.22%",
      currentNav: "₹1062.38",
      minSipInvestment: "₹100",
    },
  ];
  return (
    <div>
      <table>
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
          
        </tbody>
      </table>
    </div>
  );
}

export default TradeTable;
