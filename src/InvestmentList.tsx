import { Investment } from "./UI";
import InvestmentItem from "./InvestmentItem";
// import "./InvestmentList.css";
function InvestmentList(props: { investment: Investment[] }) {
  return (
    <div className="flex flex-col">
   
      <h2>Investment List</h2>
      {props.investment.map((item, index) => (
        <InvestmentItem key={index} investment={item} />
      ))}
      
    </div>
  );
}

export default InvestmentList;
