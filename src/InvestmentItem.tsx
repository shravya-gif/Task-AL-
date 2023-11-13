import { Investment } from "./UI";
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
      <div className="flex flex-row justify-center items-center p-5">
        <div className="bg-red-600 h-28 w-full">
          {Scrip}
          <div className="">{Price}</div>
        </div>
        <div className="bg-amber-400 h-28 w-full">Quantity {Quantity}
        <div>Avg.Cost {Cost}</div>
        <div>Inv.Amount {Amount}</div></div>
        <div className="bg-lime-600 h-28 w-full">Market Value {Value}</div>
        <div className="bg-cyan-600 h-28 w-full">Unrealized P&L{PnL}</div>
        <div className="bg-blue-800 h-28 w-full"></div>
        <div className="bg-pink-600 h-28 w-full"></div>
      </div>
      {/* <h1 className="">{JSON.stringify(props.investment)}</h1> */}
    </div>
  );
}

export default InvestmentItem;
