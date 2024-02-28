import React, { useEffect, useState } from "react";
import "./TradeFilter.css";
import TradeTable from "./TradeTable";
import TradeFilterBtns from "./TradeFilterBtns";
function TradeFilter({ data }) {
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState("Top Rated");
  function handleChange(e) {
    setSearchVal(e.target.value);
  }
useEffect(()=>{
    setSearchVal("")
},[category])

  function filterCategory(data) {
    return data.filter((item) => {
      return category === item.category;
    });
  }
  function filterSearch(data) {
    return searchVal === ""
      ? data
      : data.filter((item) => {
          return item.fundName
            .toLowerCase()
            .includes(searchVal.toLowerCase());
        });
  }

  const categorisedData = filterCategory(data);
  const filteredData = filterSearch(categorisedData);
  return (
    <div className="trade-filter">
      <h2>Explore Mutual Funds</h2>
      <TradeFilterBtns category={category} setCategory={setCategory} />
      <div className="trade-filter-search">
        <input className="default search-bar"
          type="search"
          value={searchVal}
          placeholder="Search Schemes"
          onChange={handleChange}
        ></input>
        <img src="./assets/search-svgrepo-com.svg" alt="search" width={20}/>
      </div>
      <TradeTable filteredData={filteredData} />
    </div>
  );
}

export default TradeFilter;
