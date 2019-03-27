// src/actions/index.js

import { UPDATE_EXCHANGE_AMOUNT, UPDATE_EXCHANGE_FROM, UPDATE_EXCHANGE_TO } from "../constants/actionTypes";

export function updateExchangeAmount(payload) {
  return { type: UPDATE_EXCHANGE_AMOUNT, payload };
}
export function updateExchangeFrom(payload) {
  return { type: UPDATE_EXCHANGE_FROM, payload };
}
export function updateExchangeTo(payload) {
  return { type: UPDATE_EXCHANGE_TO, payload };
}