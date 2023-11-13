import { Investment } from "./UI";
import { GiHamburgerMenu } from "react-icons/gi";
function InvestmentItem(props: { investment: Investment }) {
  const {
    Scrip,
    Quantity,
    Price,
    Cost,
    Amount,
    Value,
    PnL,
    Return,
  } = props.investment;

  return (
    <div>
      <div className="m-0 flex flex-row justify-center items-center p-5">
        <GiHamburgerMenu size={100} color="#333" />
        <h1 className="p-0 m-0 grid justify-center items-center h-28 w-full">
          {Scrip}
          <span className=" text-sky-600 text-2xl font-bold">
            <span className="text-slate-600">$</span>
            {Price}
          </span>
        </h1>
        <h1 className="p-0 m-0 bg-amber-400 h-28 w-full">
          Quantity {Quantity}
          <span>Avg.Cost {Cost}</span>
          <span>Inv.Amount {Amount}</span>
        </h1>
        <h1 className="bg-lime-600 h-28 w-full">Market Value {Value}</h1>
        <h1 className="bg-cyan-600 h-28 w-full">Unrealized P&L{PnL}</h1>
        <div className="bg-blue-800 h-28 w-full"></div>
        <div className="bg-pink-600 h-28 w-full"></div>
      </div>
      {/* <h1 className="">{JSON.stringify(props.investment)}</h1> */}
    </div>
  );
}

export default InvestmentItem;
