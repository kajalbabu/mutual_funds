import React, { useState } from "react";
import ComponentTwo from '../ComponentTwo.jsx';
export default function ComponentOne(){
    const [count,setCount] = useState(0);
    const dateOne = '23/03/2023';
    const dateTwo = '13/04/2024';
    console.log("23/03/2023 13/04/2024> ",dateOne>dateTwo);
    return(
        <>
            <h1>{count}</h1>

            <ComponentTwo handleState = {setCount} Val = {count} />
        </>
    )
}