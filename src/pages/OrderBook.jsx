import React from "react";
import "./OrderBook.css";
import Table from "../components/Table";
import { useState } from "react";

export default function OrderBook(){

    

    return(
        <div className="main">
            
            <div>
                <div>
                    

                    {/* <input className="search-input" id="searchInput" type="text" placeholder="Search client name / code" ></input> */}
                    
                    
                
                    <Table/>
                </div>
            </div>
        </div>
    )

}