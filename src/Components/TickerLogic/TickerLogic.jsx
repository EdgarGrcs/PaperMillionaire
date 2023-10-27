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
        {
          name: "Visa" ,
          currentPrice: 230.95 ,
          issuedStocks: 1879000000 ,
          oldPrice: 230.95,
        },
        {
          name: "Walmart",
          currentPrice: 161.72,
          issuedStocks: 2694000000,
          oldPrice: 161.72 ,
        },
        {
          name: "LVMH" ,
          currentPrice: 704.66 ,
          issuedStocks: 2497000000 ,
          oldPrice: 704.66 ,
        },
        {
          name: "Johnson & Johnson" ,
          currentPrice: 148.07 ,
          issuedStocks: 2674000000 ,
          oldPrice: 148.07 ,
        },
        {
          name: "Procter & Gamble" ,
          currentPrice: 149.76 ,
          issuedStocks: 2359100000,
          oldPrice: 149.76 ,
        },
        {
          name: "Tencent" ,
          currentPrice: 36.96 ,
          issuedStocks: 9695000000,
          oldPrice: 36.96 ,
        },
        {
          name: "Mastercard" ,
          currentPrice: 362.42 ,
          issuedStocks: 942050101,
          oldPrice: 362.42 ,
        },
        {
          name: "Samsung" ,
          currentPrice: 49.68 ,
          issuedStocks: 6802194175,
          oldPrice: 49.68 ,
        },
        {
          name: "Nestlé" ,
          currentPrice: 108.66 ,
          issuedStocks: 2670000000,
          oldPrice: 108.66 ,
        },
        {
          name: "Chevron" ,
          currentPrice: 146.10 ,
          issuedStocks: 1891695000,
          oldPrice: 146.10 ,
        },
        {
          name: "Oracle" ,
          currentPrice: 101.05 ,
          issuedStocks: 2707000000,
          oldPrice: 101.05 ,
        },
        {
          name: "Merck" ,
          currentPrice: 104.78 ,
          issuedStocks: 434800000,
          oldPrice: 104.78 ,
        },
        {
          name: "Coca-Cola" ,
          currentPrice: 55.80 ,
          issuedStocks: 4326000000,
          oldPrice: 55.80 ,
        },
        {
          name: "Toyota" ,
          currentPrice: 174.60 ,
          issuedStocks: 1363240300,
          oldPrice: 174.60 ,
        },
        {
          name: "Adobe" ,
          currentPrice: 517.68 ,
          issuedStocks: 458000000,
          oldPrice: 517.68 ,
        },
        {
          name: "Pepsico" ,
          currentPrice: 161.68 ,
          issuedStocks: 1378000000,
          oldPrice: 161.68 ,
        },
        {
          name: "L'Oréal" ,
          currentPrice: 415.13 ,
          issuedStocks: 2680000000,
          oldPrice: 415.13 ,
        },
        {
          name: "Shell" ,
          currentPrice: 66.96 ,
          issuedStocks: 7300000000,
          oldPrice: 66.96 ,
        },
        {
          name: "Alibaba" ,
          currentPrice: 84.05 ,
          issuedStocks: 2581375000,
          oldPrice: 84.05 ,
        },
        {
          name: "Cisco" ,
          currentPrice: 51.66 ,
          issuedStocks: 4089000000,
          oldPrice: 51.66 ,
        },
        {
          name: "Bank of America" ,
          currentPrice: 25.84 ,
          issuedStocks: 8797000000,
          oldPrice: 25.84 ,
        },
        {
          name: "AstraZeneca" ,
          currentPrice: 62.77 ,
          issuedStocks: 1549800030,
          oldPrice: 62.77 ,
        },
        {
          name: "Hermés" ,
          currentPrice: 1859 ,
          issuedStocks: 105569412,
          oldPrice: 1859 ,
        },
        {
          name: "Salesforce" ,
          currentPrice: 195.82 ,
          issuedStocks: 980000000,
          oldPrice: 195.82 ,
        },
        {
          name: "McDonald" ,
          currentPrice: 256.78 ,
          issuedStocks: 730900000,
          oldPrice: 256.78 ,
        },
        {
          name: "Accenture" ,
          currentPrice: 290.34 ,
          issuedStocks: 631535162,
          oldPrice: 290.34 ,
        },
        {
          name: "PetroChina" ,
          currentPrice: 1.01 ,
          issuedStocks: 181766666667,
          oldPrice: 1.01,
        },
        {
          name: "Netflix" ,
          currentPrice: 405.03 ,
          issuedStocks: 443881000,
          oldPrice: 405.03 ,
        },
        {
          name: "Pfizer" ,
          currentPrice: 30.96 ,
          issuedStocks: 5634000000,
          oldPrice: 30.96 ,
        },
        {
          name: "T-Mobile US" ,
          currentPrice: 143.00 ,
          issuedStocks: 1219608362,
          oldPrice: 143.00 ,
        },
        {
          name: "Abbott Laboratories" ,
          currentPrice: 94.72 ,
          issuedStocks: 1738946799,
          oldPrice: 94.72 ,
        },
        {
          name: "Comcast" ,
          currentPrice: 39.36 ,
          issuedStocks: 4654000000,
          oldPrice: 39.36 ,
        },
        {
          name: "TotalEnergies" ,
          currentPrice: 67.51 ,
          issuedStocks: 2491928251,
          oldPrice: 67.51 ,
        },
        {
          name: "SAP" ,
          currentPrice: 132.64 ,
          issuedStocks: 1167000000,
          oldPrice: 132.64 ,
        },
        {
          name: "AMD" ,
          currentPrice: 95.28 ,
          issuedStocks: 1611000000,
          oldPrice: 95.28 ,
        },
        {
          name: "Nike" ,
          currentPrice: 100.21 ,
          issuedStocks: 1543800000,
          oldPrice: 100.21 ,
        },
        {
          name: "Intel" ,
          currentPrice: 35.30 ,
          issuedStocks: 4154000000,
          oldPrice: 35.30 ,
        },
        {
          name: "China Construction Bank" ,
          currentPrice: 0.88 ,
          issuedStocks: 1318181818,
          oldPrice: 0.88 ,
        },
        {
          name: "Walt Disney" ,
          currentPrice: 80.03 ,
          issuedStocks: 1828000000,
          oldPrice: 80.03 ,
        },
        {
          name: "Verizon" ,
          currentPrice: 34.42 ,
          issuedStocks: 4207000000,
          oldPrice: 34.42 ,
        },
        {
          name: "Dior" ,
          currentPrice: 677.09 ,
          issuedStocks: 721640000,
          oldPrice: 677.09 ,
        },
    ]

  const [stockPrice, setStockPrice] = useState(stocks);
  const [dataSet, setDataSet] = useState([177]);

  useEffect(() => {
    setTimeout(() => updateStockPrice(stockPrice), 10000);
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
