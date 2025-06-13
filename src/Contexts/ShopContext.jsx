import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const { allProducts } = useContext(ProductContext);

  const getDefaultCart = (products) => {
    const cart = {};
    products?.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (allProducts.length > 0) {
      setCartItems(getDefaultCart(allProducts));
    }
  }, [allProducts]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = allProducts.find((p) => p.id === itemId);
        if (product) {
          totalAmount += product.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };
  const decreaseFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const clearCartItem = () => {
    setCartItems(getDefaultCart(allProducts));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    clearCartItem,
    allProducts,
    decreaseFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
