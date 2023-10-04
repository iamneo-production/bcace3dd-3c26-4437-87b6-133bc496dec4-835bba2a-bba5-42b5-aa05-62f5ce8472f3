// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        // If the product is already in the cart, update its quantity
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const incrementQuantity = (product) => {
    const updatedCartItems = cartState.cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    dispatch({ type: "UPDATE_QUANTITY", payload: updatedCartItems });
  };

  const decrementQuantity = (product) => {
    const updatedCartItems = cartState.cartItems.map((item) => {
      if (item.id === product.id) {
        const updatedQuantity = item.quantity - 1;
        // Ensure the quantity doesn't go below zero
        const newQuantity = Math.max(updatedQuantity, 0);
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });

    dispatch({ type: "UPDATE_QUANTITY", payload: updatedCartItems });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
