import React from "react";
import DonutChart from "react-donut-chart";

const MyDonutChart = () => {
  return (
    <DonutChart
      data={[
        {
          label: "MF",
          value: 4,
        },
        {
          label: "ETF",
          value: 1.5,
        },
      ]}
    />
  );
};

export default MyDonutChart;
