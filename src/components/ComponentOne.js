import React, { useState } from "react";
import ComponentTwo from "./ComponentTwo";
export default function ComponentOne(){
    const [example, setExample] = useState("One");

    return(
        <>
            <h1>{example}</h1>
            <ComponentTwo setExample={setExample}  />
        </>
    )
}