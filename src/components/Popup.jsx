import "./Popup.css"
import { useState } from "react";

export default function Popup(props){
    const [optionSuccess,setOptionSuccess] = useState(false);
    const [optionFailed,setOptionFailed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [dateComp, setDateComp] = useState(true);
    const [statusComp, setStatusComp] = useState(false);
    const [dateFrom, setDateFrom] = useState('0/0/0');
    const [dateTo, setDateTo] = useState("90000/12/31");
    const handleDateFromChange = (event)=>{
        setDateFrom(event.target.value);
    }
    const handleDateToChange = (event)=>{
        setDateTo(event.target.value);
    }
    const handlePopupCategoryDate = ()=>{
        setDateComp(true);
        setStatusComp(false);
    }
    const handleApply = ()=>{
        console.log('clicked failed ',props.optionFailed);
        console.log('clicked completed ',props.optionSuccess);
        if(props.optionFailed == true && props.optionSuccess== true){
            props.setStatus("");
        }else{
            let tempStatus = "Success";
            if(props.optionFailed==true)
            {
                tempStatus= "Failed";
            }
            props.setStatus(tempStatus);
        }
        props.setOptionSuccess(optionSuccess);
        props.setOptionFailed(optionFailed);
        console.log("dateFrom",dateFrom,"dateTo",dateTo);
        props.setDateFrom(dateFrom);
        props.setDateTo(dateTo);

    }
    const handlePopupCategoryStatus = ()=>{
        setDateComp(false);
        setStatusComp(true);
    }
    const handleReset = ()=>{

    }
    const hideComponent = () => {
      setIsVisible(!isVisible);
    };
    return (
        <>
            {isVisible && <div className="popup-overlay">
                <div className="popup-content">
                    <div className="filter-popup">
                        <div className="popupCategory">
                            <button onClick={handlePopupCategoryDate}>DATE</button>
                            <button onClick={handlePopupCategoryStatus}>STATUS</button>
                        </div>
                            
                        <div>
                        {dateComp &&
                        <div>
                            <h5>Date</h5>
                            <p>Date From</p><input onChange={handleDateFromChange} type="date"></input>
                            <p>Date To</p><input onChange={handleDateToChange} type="date"></input>
                        </div>}

                            {statusComp && <div>
                                <h5>Status</h5>
                                <input onClick={()=>setOptionSuccess(!(props.optionSuccess))} id="Completed" value="Completed" type="checkbox" />
                                <label >Completed</label>
        
                                <input onClick={()=>setOptionFailed(!(props.optionFailed))} id="Failed" value="Failed" type="checkbox" />
                                <label>Failed</label>
                            </div>}
                        </div>
                            
                    </div>
                            <div className="cancelAndApplyButtons">
                                <br/>
                                <button onClick={handleReset} className="reset-button">RESET</button>
                                <button onClick={handleApply} className="apply-button">APPLY</button>
                                <br/>
                                <button className="closeButton" onClick={hideComponent}>Close</button>
                            </div>
                </div>

            </div>}
        </>
    )
}