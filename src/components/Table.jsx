import React from "react";

export default function Table(){

    const headersOfTable = ['Fund Name','Client Code','Order Date','Order Type','Amount','FreshOrder / Investment','Order Status']
    const stockDetails= [
        {
            key : 'one',
            fundName : 'Bhandhan Liquid Fund',
            clientCode : 'B53586',
            OrderDate : '23/02/2024',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Failed'
        },
        {
            key : 'two',
            fundName : 'icici',
            clientCode : 'B53587',
            OrderDate : '23/01/2024',
            orderType : 'SIP',
            amount : 100,
            orderCategory : 'Fresh Order',
            orderStatus : 'Success'
        },
        {
            key : 'three',
            fundName : 'sbi Fund',
            clientCode : 'B53588',
            OrderDate : '28/02/2024',
            orderType : 'Lumpsum',
            amount : 5000,
            orderCategory : 'NA',
            orderStatus : 'Failed'
        },
        {
            key : 'four',
            fundName : 'Bhandhan Fund',
            clientCode : 'B57586',
            OrderDate : '22/02/2024',
            orderType : 'intraday',
            amount : 1008,
            orderCategory : 'NA',
            orderStatus : 'Success'
        },
        {
            key : 'one',
            fundName : 'Bhandhan Liquid Fund',
            clientCode : 'B53586',
            OrderDate : '23/02/2024',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'Fresh Order',
            orderStatus : 'Success'
        },
        {
            key : 'one',
            fundName : 'Bhandhan Liquid Fund',
            clientCode : 'B53586',
            OrderDate : '23/02/2024',
            orderType : 'Lumpsum',
            amount : 1000,
            orderCategory : 'NA',
            orderStatus : 'Fresh Order'
        }
    ] 

    return(
        <>
            {/* Table Here */}
            <div>
                    <table>
                        <thead>
                            <tr>
                                {/* {headersOfTable.map(
                                    (headVal)=>{
                                        <th>{headVal}</th>
                                        console.log("working", headVal)
                                    }
                                )} */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td><img className="filterImage" src="filter-icon.svg" alt="stock image"   />Bhandhan Regular </td>
                               <td>B535B6</td>
                               <td>23/02/2024</td>
                               <td>lUMPSUM</td>
                               <td>100rs</td>
                               <td>NA</td>
                               <td>Failed</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
        </>
    )
}