import React, { useState } from "react";
import SchemeDetails from "../../components/SchemeDetails/SchemeDetails";
import InvestButtons from "../../components/InvestButtons/InvestButtons";
import "./Invest.css";
import InvestHeader from "../../components/InvestHeader/InvestHeader";
import FundManager from "../../components/FundManager/FundManager";
import RiskAndRating from "../../components/RiskAndRating/RiskAndRating";
import Overview from "../../components/Overveiw";
import CalculateReturns from "../../components/CalculateReturns";
import YourInvestmentPad from "../../components/YourInvestmentPad";
import SimilarFunds from "../../components/SimilarFunds/SimilarFunds";

function Invest() {
  const fundKey = "sixTwo";
  const [investButton, setInvestButton] = useState("Overview");
  return (
    <div className="invest">
      <div className="invest-body">
        <div className="card-layout">
          <InvestHeader />
          <InvestButtons
            investButton={investButton}
            setInvestButton={setInvestButton}
          />
        </div>
        <div className="overview-section">
          <Overview fundKey={fundKey} />
          <CalculateReturns fundKey={fundKey} />
        </div>
        <SchemeDetails />
        <FundManager />
        <RiskAndRating />
        <SimilarFunds/>
      </div>
      <YourInvestmentPad />
    </div>
  );
}

export default Invest;
