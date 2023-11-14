import React from "react";
import DonutChart from "react-donut-chart";

const MyDonutChart = () => {

  return (
    <div>
      <DonutChart
      height={300}
      width={350}
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
    </div>
  );
};

export default MyDonutChart;
