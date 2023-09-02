import React, {useState, useEffect} from "react";
import msft from "../../JSON-Data/MSFT-Stock.json";
import amzn from "../../JSON-Data/AMZN-Stocks.json";
import tsla from "../../JSON-Data/TSLA-Stock.json";
import fb from "../../JSON-Data/FB-Stock.json";



const TickerLogic = () => {

    const [counter, setCounter] = useState(0);


    const updateTicker = () => {
        console.log(counter);
        setCounter(counter +1 );
    }


    useEffect(() => {
        setTimeout(() => updateTicker(), 5000)
    });


    let microsoftStock = msft[counter];
    let amazonStock = amzn[counter];
    let teslaStock = tsla[counter];
    let facebookStock = fb[counter];


   // setTimeout(updateTicker(),33000);

    return (
        <div className="mainWindow">
                    <div className="stockWindow"> {microsoftStock.price} </div>
                    <div className="stockWindow"> {amazonStock.price} </div>
                    <div className="stockWindow"> {teslaStock.price} </div>
                    <div className="stockWindow"> {facebookStock.price} </div>
        </div>
    )




}




export default TickerLogic;