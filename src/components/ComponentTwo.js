import React, { useState } from "react";

export default function ComponentOne(props){
    const handleStateChange = ()=>{
        props.setExample("two");
    }

    return(
        <>
            <button onClick={handleStateChange}>change State of parent</button>  
        </>
    )
}