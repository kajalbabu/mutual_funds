import "./Popup.css"
import { useState } from "react";

export default function Popup(){
    const [isVisible, setIsVisible] = useState(true);
    const hideComponent = () => {
      setIsVisible(!isVisible);
    };
    return (
        <>
            {isVisible && <div className="popup-overlay">
                <div className="popup-content">
                    <div className="filter-popup">
                            <h5>Date</h5>
                            <p>Date From</p><input type="date"></input>
                            <p>Date To</p><input type="date"></input>
                            <h5>Status</h5>
                            <input id="Completed" type="checkbox" />
                            <label >Completed</label>

                            <input id="Inprogress" type="checkbox" />
                            <label >Inprogress</label>

                            <input id="Failed" type="checkbox" />
                            <label>Failed</label>
                            <br/>
                            <button className="closeButton" onClick={hideComponent}>Close</button>
                    </div>
                </div>

            </div>}
        </>
    )
}