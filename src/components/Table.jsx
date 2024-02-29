import React from "react";
import './Table.css';
import Popup from "../components/Popup";
import { useState } from "react";
export default function Table(){
    const [isHidden, setIsHidden] = useState(true);
    
    const [dateFrom, setDateFrom] = useState("2022/01/01");
    const [dateTo, setDateTo] = useState("90000/01/01");

    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };
    // initializing states
    const [purchaseComponent, setPurchaseComponent] = useState(true);
    const [withdrawComponent, setWithdrawComponent] = useState(false);
    const [switchComponent, setSwitchComponent] = useState(false);
    //search term initialization
    const [searchTerm, setSearchTerm] = useState('');
    // input order type category
    const [orderTypeVal, setOrderTypeVal] = useState('All');
    // handling input change here on every click in input
    const handleInputChange = (searchValue) => {
        setSearchTerm(searchValue.target.value);
    };
    // handling order type filter
    const handleOrderType = (event)=>{
        console.log("slected ", event.target.value);
        setSearchTerm(event.target.value);
    }
    // 3 arrow functions which make state changes on click
    const toggleComponentPurchase = () => {
        console.log("i am here toggleComponentPurchase");
        setWithdrawComponent(false);
        setPurchaseComponent(true);
        setSwitchComponent(false);
    };
    const toggleComponentWithdraw = () => {
        console.log("i am here toggleComponentWithdraw");
        setWithdrawComponent(true);
        setPurchaseComponent(false);
        setSwitchComponent(false);
    };
    const toggleComponentSwitch = () => {
        console.log("i am here toggleComponentSwitch");
        setWithdrawComponent(false);
        setPurchaseComponent(false);
        setSwitchComponent(true);
    };
    // data need to make headers and table rows
    // header data
    const headersOfTable = [{headOne:'Fund Name',headTwo:'Client Code',
                            headThree:'Order Date',headFour:'Order Type',
                            headFive:'Amount',headSix:'FreshOrder / Investment',
                            headSeven:'Order Status'}]
    const stockDetailsPurchased= [
        {
            key : 'Purchased added',
            fundName : 'Purchased added',
            clientCode : 'B53586',
            OrderDate : '2023/01/02',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Failed',
            category:'Purchased',
            imageUrl : 'logo1.svg'
        },
        {
            key : 'one',
            fundName : 'Bhandhan Liquid',
            clientCode : 'B53586',
            OrderDate : '2024/01/03',
            orderType : 'SIP',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Failed',
            category:'Purchased',
            imageUrl : 'logo1.svg'
        },
        {
            key : 'two',
            fundName : 'icici',
            clientCode : 'B53587',
            OrderDate : '2023/02/02',
            orderType : 'SIP',
            amount : 100,
            orderCategory : 'Fresh Order',
            orderStatus : 'Success',
            category:'Withdraw',
            imageUrl : 'logo3.svg'
        },
        {
            key : 'threeghbjn',
            fundName : 'sbi Fund',
            clientCode : 'B53588',
            OrderDate : '2024/02/02',
            orderType : 'SIP',
            amount : 5000,
            orderCategory : 'NA',
            orderStatus : 'Failed',
            category:'Switch',
            imageUrl : 'logo2.svg'
        },
        {
            key : 'three09uy',
            fundName : 'sbi Fund',
            clientCode : 'B53588',
            OrderDate : '2023/03/02',
            orderType : 'Intraday',
            amount : 5000,
            orderCategory : 'NA',
            orderStatus : 'Failed',
            category:'Switch',
            imageUrl : 'logo2.svg'
        },
        {
            key : 'threeerfgbn',
            fundName : 'sbi Withdraw',
            clientCode : 'B53588',
            OrderDate : '2024/03/02',
            orderType : 'Intraday',
            amount : 5000,
            orderCategory : 'NA',
            orderStatus : 'Failed',
            category:'Withdraw',
            imageUrl : 'logo2.svg'
        },
        {
            key : 'four',
            fundName : 'Bhandhan Fund',
            clientCode : 'B57586',
            OrderDate : '2023/04/02',
            orderType : 'intraday',
            amount : 1008,
            orderCategory : 'NA',
            orderStatus : 'Success',
            category:'Purchased',
            imageUrl : 'logo2.svg'
        },
        {
            key : 'five',
            fundName : 'Bhandhan Liquid',
            clientCode : 'B53586',
            OrderDate : '2024/04/02',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Success',
            category:'Withdraw',
            imageUrl : 'logo3.svg'
        },
        {
            key : 'six',
            fundName : 'Bhandhan Liquid',
            clientCode : 'B53586',
            OrderDate : '2023/05/02',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'NA',
            orderStatus : 'Success',
            category:'Switch',
            imageUrl : 'logo1.svg'
        },{
            key : 'oneTwo',
            fundName : 'Bhandhan Liquid',
            clientCode : 'B53586',
            OrderDate : '2024/05/02',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Failed',
            category:'Purchased',
            imageUrl : 'logo2.svg'
        },
        {
            key : 'twoTwo',
            fundName : 'icici',
            clientCode : 'B53587',
            OrderDate : '2023/06/02',
            orderType : 'SIP',
            amount : 100,
            orderCategory : 'Fresh Order',
            orderStatus : 'Success',
            category:'Withdraw',
            imageUrl : 'logo2.svg'
        },
        {
            key : 'threeTwo',
            fundName : 'sbi Fund',
            clientCode : 'B53588',
            OrderDate : '2024/06/02',
            orderType : 'Lumpsum',
            amount : 5000,
            orderCategory : 'NA',
            orderStatus : 'Failed',
            category:'Switch',
            imageUrl : 'logo3.svg'
        },
        {
            key : 'fourTwo',
            fundName : 'Bhandhan Fund',
            clientCode : 'B57586',
            OrderDate : '2022/07/02',
            orderType : 'intraday',
            amount : 1008,
            orderCategory : 'NA',
            orderStatus : 'Success',
            category:'Purchased',
            imageUrl : 'logo1.svg'
        },
        {
            key : 'fiveTwo',
            fundName : 'Bhandhan Liquid',
            clientCode : 'B53586',
            OrderDate : '2023/08/02',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Success',
            category:'Withdraw',
            imageUrl : 'logo1.svg'
        },
        {
            key : 'sixTwo',
            fundName : 'Bhandhan Liquid',
            clientCode : 'B53586',
            OrderDate : '2021/02/02',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'NA',
            orderStatus : 'Failed',
            category:'Switch',
            imageUrl : 'logo2.svg'
        }
    ]
    // table data
    const StocksTable = ({stocksDataArray,stocksHeaderArray,category,itemsPerPage})=>{
        const [currentPage, setCurrentPage] = useState(1);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        // temparry array initialization
        const tempArray = [];
        const tempArrayFunction = stocksDataArray.map(bdVal => {
                return(
                    category===bdVal.category && tempArray.push(bdVal)
                )
        })
        const currentItems = tempArray.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(tempArray.length / itemsPerPage);
        
        const handlePageChange = (page) => {
            setCurrentPage(page);
          };
        return(
            <>
            
            <table>
                <thead>
                    {stocksHeaderArray.map(headVal => (
                        <tr key={headVal.headOne}>
                            <th>{headVal.headOne}  </th>
                            <th>{headVal.headTwo}  </th>
                            <th>{headVal.headThree}</th>
                            <th>{headVal.headFour} </th>
                            <th>{headVal.headFive} </th>
                            <th>{headVal.headSix}  </th>
                            <th>{headVal.headSeven}</th>
                        </tr>
                        
                    ))}
                </thead>
                
                <tbody>
                    {currentItems.map(bdVal => (
                        category===bdVal.category &&

                        <tr key={bdVal.key}>
                            <td><img className="logo" src={bdVal.imageUrl} />{bdVal.fundName}</td>
                            <td>{bdVal.clientCode}</td>
                            <td>{bdVal.OrderDate}</td>
                            <td>{bdVal.orderType}</td>
                            <td>{bdVal.amount}</td>
                            <td>{bdVal.orderCategory}</td>
                            <td><button className={bdVal.orderStatus}>{bdVal.orderStatus}</button></td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} >prev</button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>next</button>
            </div>
            </>
    
        );
    }
    
    // filtered data rows
    const filteredRows =
        searchTerm === ""
          ? stockDetailsPurchased
          : stockDetailsPurchased.filter((item) => {
              if (
                (item.fundName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.clientCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.orderType.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
              ){
                console.log('true');
                console.log('(item.OrderDate>=dateFrom, item.OrderDate<=dateTo)',dateFrom,dateTo);
                // console.log('true (item.OrderDate>=dateFrom && item.OrderDate<=dateTo)',(item.OrderDate>=dateFrom && item.OrderDate<=dateTo));
                return true;
              }
              else{
                console.log('false');
                console.log('(item.OrderDate>=dateFrom, item.OrderDate<=dateTo)',dateFrom<dateTo);
                // console.log('false (item.OrderDate>=dateFrom && item.OrderDate<=dateTo)',(item.OrderDate>=dateFrom && item.OrderDate<=dateTo));
                return false;
              } 
    });
    
    return(
        <div className="OrderBookComponent">
            
            <h4>Order Book</h4>
            <div className="navigation-section">
                <button onClick={toggleComponentPurchase} id="Purchase">Purchase</button>
                <button onClick={toggleComponentWithdraw} id="Withdraw">Withdraw</button>
                <button onClick={toggleComponentSwitch} id="Switch">Switch</button>
            </div>
            <input onChange={handleInputChange} className="search-input" id="searchInput" type="text" placeholder="Search client name / code "/>
            
            <label><b id="OrderTypeText">OrderType</b>
                    <select onChange={handleOrderType} id="selectOption">
                        <option value=''>All</option>
                        <option value='Lumpsum'>Lumpsum</option>
                        <option value='Intraday'>Intraday</option>
                        <option value='SIP'>SIP</option>
                    </select>
                    </label>
            <button className="filterButton" onClick={toggleVisibility}><img className="filterImage" src="filter-icon.svg" alt="filter" />Filters</button>
                    {isHidden ? null : <Popup  />
                    }
            <hr/>
            <div className="table">
                {purchaseComponent && <StocksTable stocksDataArray={filteredRows} stocksHeaderArray={headersOfTable} category={'Purchased'} itemsPerPage={4}/>}
                {withdrawComponent && <StocksTable stocksDataArray={filteredRows} stocksHeaderArray={headersOfTable} category={'Withdraw'} itemsPerPage={4}/>}
                {switchComponent && <StocksTable stocksDataArray={filteredRows} stocksHeaderArray={headersOfTable} category={'Switch'} itemsPerPage={4}/>}
            </div>
        </div>
    )
}