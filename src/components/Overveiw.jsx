import React from "react";
import "./Overview.css";
import {UserData} from "../components/data/UserData";
import { useState } from "react";
import { OverviewData } from "./data/OverviewData";


export default function Overview(props){

    return(
        <div className="overview-component">
            <section className="head-section">
                <div className="image-section-in-head">
                    {/* <img src={UserData[(props.fundKey).imageUrl]}  /> */}
                    <img className="logo" src={(OverviewData[props.fundKey]).imageUrl} />
                </div>
                <div className="details-of-head-section">
                        <p className="smallDetails"> {(OverviewData[props.fundKey]).investmentType} <span> * </span> 
                            {(OverviewData[props.fundKey]).subCategoryName}
                        </p>
                        <h2 className="overview-head">{(OverviewData[props.fundKey]).fundName}</h2>
                </div>
            </section>
            <section className="returns-section">
                <hr></hr>
                    <p className="smallDetails">returns</p>
                <div className="retunsMainTextContent">
                    <h1> {(OverviewData[props.fundKey]).returns} %   </h1><pre><p className="smallDetails">  <b>anually</b> for last {(OverviewData[props.fundKey]).returnYears} years</p></pre>
                    <hr></hr>
                </div>
                
            </section>
            <hr></hr>
            <section className="example-chart">
                {/* <LineChart fundKey={props.fundKey} /> */}
                {/* <LineChart funcKey={(OverviewData[props.fundKey]).fundKey} /> */}
                <img className="example-chart-image" src="example-of-line-chart.png"  />
            </section>
        </div>
    )
}