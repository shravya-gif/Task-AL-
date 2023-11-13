import React from 'react'
import { Investment } from './UI'
function InvestmentItem(props:{investment:Investment}) {
  return (
    <div>
      <h1>{JSON.stringify(props.investment)}</h1>
    </div>
  )
}

export default InvestmentItem
