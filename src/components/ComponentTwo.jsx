import React from "react";
export default function ComponentTwo(props){
    const newVal = props.Val + 1;
    return(
        <button onClick={()=>props.handleState(newVal)}>increment</button>
    )
}