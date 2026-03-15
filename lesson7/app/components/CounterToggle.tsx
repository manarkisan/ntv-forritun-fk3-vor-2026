import { createContext, useContext, useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
const initialCartState = {
  items: [],
};

export default function ShoppingCart() {
    const [cartState, dispatcher] = useReducer(cartReducer, initialCartState);

    const products = [
        { id: 1, name: "Product A", price: 20 },
        { id: 2, name: "Product B", price: 30 },
        { id: 3, name: "Product C", price: 25 },
    ];
     
    const handleAddToCart = (product) => {
        dispatcher ({ type: "ADD_CART", payload: product});
    };

    const handleRemoveFromCart = (product) => {
            dispatcher ({ type: "DELETE_CART", payload: product });
    };

    const handleClearCart = () => {
        dispatcher({ type: "CLEAR_CART" })
    }

}