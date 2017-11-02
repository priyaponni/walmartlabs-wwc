import { combineReducers } from "redux";

const cars = (store = {}) => {
  return store;
};

const transactions = (store = {}) => {
  return store;
};

export default combineReducers({
  cars,
  transactions
});