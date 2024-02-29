import React, { useState } from "react";
import ComponentTwo from '../ComponentTwo.jsx';
export default function ComponentOne(){
    const [count,setCount] = useState(0);

    return(
        <>
            <h1>{count}</h1>
            <ComponentTwo handleState = {setCount} Val = {count} />
        </>
    )
}