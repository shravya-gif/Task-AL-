import React from "react";
import { Investment } from "./UI";
import InvestmentItem from "./InvestmentItem";
import DonutChart from "./Chart";

function InvestmentList(props: { investment: Investment[] }) {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-col">
      {/* Investment List */}
      <div className="flex flex-col">
        <h2>Investment List</h2>
        {props.investment.map((item, index) => (
          <InvestmentItem key={index} investment={item} />
        ))}
      </div>

      {/* DonutChart */}
      <div className="h-10 w-10 sm:flex-col lg:order-last">
        <DonutChart />
      </div>
    </div>
  );
}

export default InvestmentList;
