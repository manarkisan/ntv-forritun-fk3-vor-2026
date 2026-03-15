import { createContext, useContext, useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_COUNT":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_COUNT":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
const initialCountStaqte = {
  items: [],
};
