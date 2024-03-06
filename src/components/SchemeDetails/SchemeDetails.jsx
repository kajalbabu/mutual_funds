import React from "react";
import "./SchemeDetails.css";
import { investData } from "../investData";
function SchemeDetails({filteredInvestData}) {
  const data = investData[0];
  return (
    <div className="scheme-details">
      <h4>Basic Information</h4>
      <div className="basic-info-body">
        <table>
          <tr>
            <td>
              <div className="basic-info-data left">
                <p>
                  <span className="material-symbols-outlined">cake</span>Fund
                  Age
                </p>
                <p>{filteredInvestData[0].fundAge}</p>
              </div>
            </td>
            <td>
              <div className="basic-info-data right">
                <p>
                  <span className="material-symbols-outlined">pie_chart</span>
                  Fund Size(AUM)
                </p>
                <p>{data.fundSize}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="basic-info-data left">
                <p>
                  <span className="material-symbols-outlined">lock</span>Lock-in
                  Period
                </p>
                <p>{data.lockInPeriod}</p>
              </div>
            </td>
            <td>
              <div className="basic-info-data right">
                <p>
                  <span className="material-symbols-outlined">whatshot</span>
                  Expense Ratio
                </p>
                <p>{data.expenseRatio}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SchemeDetails;
