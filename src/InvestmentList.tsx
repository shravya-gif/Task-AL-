import React from "react";
import { Investment } from "./UI";
import InvestmentItem from "./InvestmentItem";
import DonutChart from "./Chart";

function InvestmentList(props: { investment: Investment[] }) {
  return (
    <div className="flex flex-col sm:flex-row  md:flex-row lg:flex-row lg:items-center">
      {/* Investment List */}
      <div className="flex flex-col ">
        {props.investment.map((item, index) => (
          <InvestmentItem key={index} investment={item} />
        ))}
      </div>

      {/* DonutChart */}
      <div className="h-10 w-10 sm:flex-col md:order-last lg:order-last">
        <DonutChart />
      </div>
    </div>
  );
}

export default InvestmentList;
