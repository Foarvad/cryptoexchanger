// src/actions/index.js

import { UPDATE_EXCHANGE_AMOUNT, UPDATE_EXCHANGE_FROM, UPDATE_EXCHANGE_TO, UPDATE_EXCHANGE_RATE, UPDATE_EXCHANGE_PAIR, UPDATE_BALANCE } from "../constants/actionTypes";

export function updateExchangeAmount(payload) {
  return { type: UPDATE_EXCHANGE_AMOUNT, payload };
}
export function updateExchangeFrom(payload) {
  return { type: UPDATE_EXCHANGE_FROM, payload };
}
export function updateExchangeTo(payload) {
  return { type: UPDATE_EXCHANGE_TO, payload };
}
export function updateExchangeRate(payload) {
  return { type: UPDATE_EXCHANGE_RATE, payload };
}
export function updateExchangePair(payload) {
  return { type: UPDATE_EXCHANGE_PAIR, payload };
}
export function updateBalance(payload) {
  return { type: UPDATE_BALANCE, payload };
}