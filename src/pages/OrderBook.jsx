import React from "react";
import "./OrderBook.css";
import Table from "../components/Table";
import { useState } from "react";
import Popup from "../components/Popup";
export default function OrderBook(){

    const [isHidden, setIsHidden] = useState(true);
    

    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };

    return(
        <div className="main">
            <h2>Order Book</h2>
            <div className="navigation-section">
                <button id="Purchase">Purchase</button>
                <button id="Withdraw">Withdraw</button>
                <button id="Switch">Switch</button>
            </div>
            <div>
                <div>
                    <label>
                      Search:
                      <input className="search-input" id="searchInput" type="text" placeholder="Search client name / code" />
                    </label>

                    {/* <input className="search-input" id="searchInput" type="text" placeholder="Search client name / code" ></input> */}
                    <label><b>OrderType</b></label>
                    <select id="selectOption">
                        <option>All</option>
                        <option>typeOne</option>
                        <option>typeTwo</option>
                    </select>
                    <button className="filterButton" onClick={toggleVisibility}><img className="filterImage" src="filter-icon.svg" alt="filter" />Filters</button>
                    {isHidden ? null : <Popup />
                    }
                
                    <Table/>
                </div>
            </div>
        </div>
    )

}