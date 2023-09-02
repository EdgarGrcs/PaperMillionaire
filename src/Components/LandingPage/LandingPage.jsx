import React, {useState} from "react";
import "./LandingPage.css";
import TickerLogic from "../TickerLogic/TickerLogic";

const LandingPage = () => {

    return (
        <div className="mainWindow">
            <TickerLogic/>
        </div>
     
    )

}


export default LandingPage;