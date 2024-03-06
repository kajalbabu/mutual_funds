import React, { useState } from "react";
import SchemeDetails from "../../components/SchemeDetails/SchemeDetails";
import InvestButtons from "../../components/InvestButtons/InvestButtons";
import "./Invest.css";
import InvestHeader from "../../components/InvestHeader/InvestHeader";
import FundManager from "../../components/FundManager/FundManager";
import RiskAndRating from "../../components/RiskAndRating/RiskAndRating";
import { useLocation } from "react-router-dom";
import { investData } from "../../components/investData";

function Invest(props) {
  const [investButton, setInvestButton] = useState("Overview");
  const location = useLocation();
  function filterInvestData(data){
      return data.filter((item)=>{
        return item.id===location.state.id
      })
  }
  const filteredInvestData=filterInvestData(investData);
  console.log(filteredInvestData)
  return (
    <div className="invest">
      <div className="card-layout">
        <InvestHeader />
        <InvestButtons
          investButton={investButton}
          setInvestButton={setInvestButton}
        />
      </div>
      <SchemeDetails filteredInvestData={filteredInvestData}/>
      <FundManager />
      <RiskAndRating />
    </div>
  );
}

export default Invest;
