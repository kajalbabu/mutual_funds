import React, { useState } from "react";
import "./YourInvestment.css";


export default function YourInvestmentPad(){
    const [sip,setSip] = useState('present');
    const [oneTime, setOneTime] = useState("not-present");
    const handleNavSip = ()=>{
        setOneTime('');
        setSip("present");
    }
    const handleNavOneTime = ()=>{
        setOneTime('present');
        setSip("");
    }
    return(
        <div className="investment-main">
            <section className="head-section">
                <h1 className="invest-head">Your Investment Pad</h1>
            </section>
            <hr />
            <section className="search-section">
                <p className="smallDetails invest-smallDetails">Clients</p>
                <input className="invest-search" type="text" placeholder="search client name or code"></input>
                <button className="add-button" id="addInvesstmentButton">+ ADD</button>
            </section>
            <section>
                <div className="nav-for-sip-onetime" >
                    <h4 onClick={handleNavSip} className={sip}>SIP</h4>
                    <h4>|</h4>
                    <h4 onClick={handleNavOneTime} className={oneTime}>ONT-TIME</h4>
                </div>
                <div className="invest-amount-selector  ">
                   <div>
                        <p>Enter Amount</p>
                        <input className="sip-input" type="text"></input>
                        <br/>
                        <section className="select-amount-buttons">
                            <h4>5000</h4>
                            <h4>10000</h4>
                            <h4>15000</h4>
                        </section>
                   </div>
                </div>
            </section>

        </div>
    )
} 