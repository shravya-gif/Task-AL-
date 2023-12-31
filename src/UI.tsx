import React from "react";
import InvestmentList from "./InvestmentList";
// import './App.css'
export interface Investment {
  Scrip: string;
  Quantity: number;
  Price: number;
  Cost: number;
  Amount: number;
  Value: number;
  PnL: string | number | null;
  Return: number;
}

const data: Investment[] = [
  {
    Scrip: "AADR",
    Quantity: 430,
    Price: 50.3,
    Cost: 41.75,
    Amount: 17952.07,
    Value: 22.06,
    PnL: 3676.93,
    Return: 20.48,
  },
  {
    Scrip: "MFEM",
    Quantity: 210,
    Price: 23.2,
    Cost: 22.5,
    Amount: 4725.84,
    Value: 5.81,
    PnL: 146.16,
    Return: 3.09,
  },
  {
    Scrip: "JPEM",
    Quantity: 328,
    Price: 52.5,
    Cost: 56.7,
    Amount: 18597.6,
    Value: 22.86,
    PnL: -1377.6,
    Return: -7.41,
  },
  {
    Scrip: "KEMQ",
    Quantity: 801,
    Price: 20.4,
    Cost: 22.24,
    Amount: 17811.04,
    Value: 21.89,
    PnL: -1470.64,
    Return: -8.26,
  },
  {
    Scrip: "KLDW",
    Quantity: 523,
    Price: 32.9,
    Cost: 26.32,
    Amount: 13765.36,
    Value: 16.92,
    PnL: 3441.34,
    Return: 25.0,
  },
  {
    Scrip: "KOIN",
    Quantity: 335,
    Price: 25.4,
    Cost: 25.4,
    Amount: 8509.0,
    Value: 10.46,
    PnL: 0.0,
    Return: 0.0,
  },
];

function UI() {
  return (
    <div>
      <InvestmentList investment={data} />
    </div>
  );
}

export default UI;
