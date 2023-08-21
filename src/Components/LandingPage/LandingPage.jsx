import React from "react";
import "./LandingPage.css";
import msft from "../../JSON-Data/MSFT-Stock.json";


const LandingPage = () => {


    // state of i needs to be updated constantly for it to work

    let microsoftStock = [];
    for (let i = 0; i < 4; i++){
        const stock = msft[0];
        microsoftStock.push(stock);
        console.log(microsoftStock);
        
    }




    return (
        <div className="mainWindow">
              {microsoftStock.map((stock) => {
                return (
                    <div className="stockWindow"> {stock.price} </div>
                )
              })}
        </div>
    )

}


export default LandingPage;