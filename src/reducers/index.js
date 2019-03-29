// src/reducers/index.js

import { UPDATE_EXCHANGE_AMOUNT, UPDATE_EXCHANGE_FROM, UPDATE_EXCHANGE_TO, UPDATE_EXCHANGE_RATE, UPDATE_EXCHANGE_PAIR, UPDATE_BALANCE } from "../constants/actionTypes";
const initialState = {
  exchangeRate: {},
  balance: {
    USD: 10000,
    BTC: 0.5,
    ETH: 10,
    EOS: 100
  },
  minExchange: {
    USD: 0.01,
    BTC: 0.00001,
    ETH: 0.0001,
    EOS: 0.0001
  },
  exchangeAmount: '0',
  exchangeFrom: 'BTC',
  exchangeTo: 'USD',
  exchangePair: 'btc-usd'
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EXCHANGE_AMOUNT:
      return {
        ...state,
        exchangeAmount: action.payload
      }
    case UPDATE_EXCHANGE_FROM:
      return {
        ...state,
        exchangeFrom: action.payload
      }
    case UPDATE_EXCHANGE_TO:
      return {
        ...state,
        exchangeTo: action.payload
      }
    case UPDATE_EXCHANGE_RATE:
      return {
        ...state,
        exchangeRate: action.payload
      }
    case UPDATE_EXCHANGE_PAIR:
      return {
        ...state,
        exchangePair: action.payload
      }
    case UPDATE_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    default:
      return state
  }
}

export default rootReducer