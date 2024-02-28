import "./Popup.css"
import { useState } from "react";

export default function Popup(props){
    const [isVisible, setIsVisible] = useState(true);
    const [dateComp, setDateComp] = useState(true);
    const [statusComp, setStatusComp] = useState(false);
    const handlePopupCategoryDate = ()=>{
        setDateComp(true);
        setStatusComp(false);
    }
    const handlePopupCategoryStatus = ()=>{
        setDateComp(false);
        setStatusComp(true);
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
                            <p>Date From</p><input type="date"></input>
                            <p>Date To</p><input type="date"></input>
                        </div>}

                            {statusComp && <div>
                                <h5>Status</h5>
                                <input id="Completed" type="checkbox" />
                                <label >Completed</label>
        
                                <input id="Inprogress" type="checkbox" />
                                <label >Inprogress</label>
        
                                <input id="Failed" type="checkbox" />
                                <label>Failed</label>
                            </div>}
                        </div>
                            
                    </div>
                            <div className="cancelAndApplyButtons">
                                <br/>
                                <button className="reset-button">RESET</button>
                                <button className="apply-button">APPLY</button>
                                <br/>
                                <button className="closeButton" onClick={hideComponent}>Close</button>
                            </div>
                </div>

            </div>}
        </>
    )
}