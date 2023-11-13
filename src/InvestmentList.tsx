import React from 'react';
import { Investment } from './UI';
import InvestmentItem from './InvestmentItem';
import './InvestmentList.css'
function InvestmentList(props: { investment: Investment[] }) {
  return (
    <div>
      <h2>Investment List</h2>
      {props.investment.map((item, index) => (
        <InvestmentItem key={index} investment={item} />
      ))}
    </div>
  );
}

export default InvestmentList;
