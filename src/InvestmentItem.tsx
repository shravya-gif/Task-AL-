import { Investment } from "./UI";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBox2Fill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { BarIndicator } from "./BarIndicator";
import MarketValue from "./MarketValue";
import logoImage from "./Images/IShares_by_BlackRock_Logo.png";
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
    <div className="flex items-center gap-5 flex-col sm:flex-col lg:flex-row  border m-5">
      <GiHamburgerMenu size={24} color="#333" />

      <div className="flex flex-col w-20 ">
        <h1>{Scrip}</h1>
        <h1 className="text-2xl text-sky-600 font-bold">
          <span className="text-black">$</span>
          {Price}
        </h1>
      </div>

      {/* Image  */}
      <div>
        <img src={logoImage} alt="Logo" className="h-5 w-15" />
      </div>

      {/* Investment details */}
      <div className="flex flex-col w-80 justify-around">
        <div className="flex gap-4">
          <BsBox2Fill size={20} color="#333"></BsBox2Fill>
          <h1>Quantity</h1>
          <div className="flex-1"></div>
          <h1>{Quantity}</h1>
        </div>
        <div className="flex gap-0">
          <h1 className="h-10 w-10 -mb-4">@</h1>
          <h1>Avg Cost</h1>
          <div className="flex-1"></div>
          <h1>{`$${Cost}`}</h1>
        </div>
        <div className="flex gap-4">
          <AiFillCreditCard size={24} />
          <h1>Invested Amt</h1>
          <div className="flex-1"></div>
          <h1>{`$${Amount}`}</h1>
        </div>
      </div>

      {/* Market value details */}
      <div className="flex flex-col w-60">
        <div className="flex gap-8">
          <h1>Market Value</h1>
          <div className="flex-1"></div>
          <h1>{`$${MarketValue(props.investment)}`}</h1>
        </div>
        <div className="flex gap-8">
          <h1>%of protfolio value</h1>
          <div className="flex-1"></div>
          <h1>{Value}</h1>
        </div>
        {/* <div className="flex gap-8"> */}
        <div className="flex gap-2 flex-col">
          <BarIndicator
            min={0}
            max={100}
            val={props.investment.Value}
            alignRight={false}
          />
          <div className="flex"></div>
        </div>
      </div>

      {/* Unrealized details */}
      <div className="flex flex-col w-60">
        <div className="flex gap-2">
          <h1>Unrealized P&L</h1>
          <div className="flex-1"></div>
          <h1>{`$${PnL}`}</h1>
        </div>
        <div className="flex gap-2">
          <h1>% return</h1>
          <div className="flex-1"></div>
          <h1>{`${Return}%`}</h1>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex">
            <BarIndicator
              min={0}
              max={100}
              val={Math.abs(Math.min(props.investment.Return, 0))}
              alignRight={true}
              containerStyle={{
                width: "50%",
              }}
              barStyle={{
                backgroundColor: "red",
              }}
            />
            |
            <BarIndicator
              min={0}
              max={100}
              val={Math.max(props.investment.Return, 0)}
              alignRight={false}
              containerStyle={{
                width: "50%",
              }}
            />
          </div>
        </div>
      </div>
      {/* Buy and sell */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-col sm:gap-2 ">
        <button className="bg-white border-2 border-orange-500 text-black py-2 px-4 rounded transition duration-300 mb-2 hover:bg-orange-500 hover:text-white">
          Buy
        </button>

        <button className="bg-white border-2 border-orange-500 mb-3 text-black py-2 px-4 rounded transition duration-300 hover:bg-orange-500 hover:text-white">
          Sell
        </button>
      </div>
    </div>
  );
}

export default InvestmentItem;
