import { Investment } from "./UI";
import InvestmentItem from "./InvestmentItem";
// import "./InvestmentList.css";
import DonutChart from "./Chart";
function InvestmentList(props: { investment: Investment[] }) {
  return (
    <div className="flex flex-row ">
    <div className="flex flex-col ">
   
      <h2>Investment List</h2>
      {props.investment.map((item, index) => (
        <InvestmentItem key={index} investment={item} />
        
      ))}
      </div>
       <div className="h-10 w-10 sm:flex-col">
        <DonutChart />
      </div>
    
    </div>
  );
}

export default InvestmentList;
