import React, { useState, useEffect } from "react";
import { LineChart } from '@mui/x-charts/LineChart';

const TickerLogic = () => {
   let stocks = [
        {
            name: "Apple",
            currentPrice: 177.15,
            issuedStocks: 15787154000,
            oldPrice: 177.15,
        },
        {
            name: "Microsoft",
            currentPrice: 332.06,
            issuedStocks: 7441000000,
            oldPrice: 332.06,
        },
        {
            name: "Saudi Aramco",
            currentPrice: 8.96,
            issuedStocks: 263710408163,
            oldPrice: 8.96,
        },
        {
            name: "Alphabet",
            currentPrice: 140.99,
            issuedStocks: 12781000000,
            oldPrice: 140.99,
        },
        {
            name: "Amazon",
            currentPrice: 131.47,
            issuedStocks: 10250000000,
            oldPrice: 131.47,
        },
        {
            name: "NVIDIA",
            currentPrice: 439.38,
            issuedStocks: 2470000000,
            oldPrice: 439.38,
        },
        {
            name: "META Platforms",
            currentPrice: 324.00,
            issuedStocks: 2587000000,
            oldPrice: 324.00,
        },
        {
            name: "Tesla",
            currentPrice: 254.85,
            issuedStocks: 3171000000,
            oldPrice: 254.85,
        },
        {
            name: "JPMorgan Chase",
            currentPrice: 426.50,
            issuedStocks: 2943800000,
            oldPrice: 426.50,
        },
    ]

  const [stockPrice, setStockPrice] = useState(stocks);
  const [dataSet, setDataSet] = useState([177]);

 /* useEffect(() => {
    setTimeout(() => calculateNewPrice(stockPrice), 10000);
  }); */

  useEffect(() => {
    setTimeout(() => updateStockPrice(stockPrice), 1000);
  }); 

 
  

  // volatility restricts how much the stock can change within a given day period
  // the higher the number, the more volatile the stock will be
  // volatility is capped between 1 and 10 percent to avoid unnecessarily huge swings in stock price

  //optimize algo to give more leeway for upside potential
  // change percentage to make it more profitable to trade (market manipulation)
  const calculateNewPrice = (stocks) => {
    const volatility = 0.01; // Math.floor(Math.random() * 10) + 1;
    const rnd = Math.random() - 0.5;
    let change_percent = 2 * volatility * rnd;
    const change_amount = stocks.oldPrice * change_percent;
    stocks.oldPrice = stocks.currentPrice;
    stocks.currentPrice = stocks.oldPrice + change_amount;
    stocks.currentPrice =
      Math.round((stocks.currentPrice + Number.EPSILON) * 100) / 100;
    stocks.oldPrice =
      Math.round((stocks.oldPrice + Number.EPSILON) * 100) / 100;
   // dataSet.push(Math.round((stocks.currentPrice + Number.EPSILON) * 100) / 100);
  };


const updateStockPrice = (stocks) => {

  
const newArray = [];

   /* stocks.map((stock) => {
        return(
             calculateNewPrice(stock)
        )
    }) */

    stocks.forEach((stock) => {
        calculateNewPrice(stock);
        newArray.push(stock);
    })

    

    setStockPrice(newArray);
   
}



/*
<LineChart
        series={[
          {
            data: dataSet,
            showMark: false,
            color:"black",
          },
        ]}
        width={300}
        height={200}
      />
      */



  return (
    <div className="mainWindow">
        {
  stockPrice.map((stock) => {

    return (
        <div className="stockWindow">
            {stock.name} {stock.currentPrice}{" "}
        {"old price: " + stock.oldPrice}{" "}
        </div>
    )
  })     }
    </div>
  );
};

export default TickerLogic;
