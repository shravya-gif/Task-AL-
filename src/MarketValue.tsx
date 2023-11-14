import React from 'react'
import { Investment } from './UI'

function MarketValue(data:Investment) {
  return data.Price*data.Quantity
}

export default MarketValue
