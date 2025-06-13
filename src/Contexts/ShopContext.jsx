// import React, { createContext, useContext, useState } from "react";
// // import all_products from "../Components/assets/all_product";
// import { ProductContext } from "./ProductContext";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   // const [allProducts, setAllProducts] = useState([]);
//   // useEffect(() => {
//   //   allProductsList();
//   // }, []);
//   // const allProductsList = () => {
//   //   fetch("http://localhost:4000/products")
//   //     .then((res) => res.json())
//   //     .then((data) => setAllProducts(data));
//   // };
//   let cart = {};
//   for (let index = 0; index < allProducts?.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const { allProducts } = useContext(ProductContext);
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   // console.log("the items",cartItems);

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     console.log(cartItems);
//   };
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = all_products.find(
//           (product) => product.id === Number(item)
//         );

//         //  console.log(cartItems[item])
//         totalAmount += itemInfo.new_price * cartItems[item];
//       }
//     }
//     //  console.log("total amount=",totalAmount);
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };
//   const clearCartItem = () => {
//     setCartItems({});
//   };
//   const contextValue = {
//     getTotalCartItems,
//     all_products,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     clearCartItem,
//   };
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;

import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const { allProducts } = useContext(ProductContext);

  // Helper: create an empty cart (id: quantity)
  const getDefaultCart = (products) => {
    const cart = {};
    products?.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  // Cart state
  const [cartItems, setCartItems] = useState({});

  // Whenever product list changes, reset the cart to match new products
  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setCartItems(getDefaultCart(allProducts));
    }
  }, [allProducts]);

  // Cart logic as before, but always use allProducts
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
        const product = allProducts?.find((p) => p.id === Number(itemId));
        if (product) {
          totalAmount += product.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalItem += cartItems[itemId];
      }
    }
    return totalItem;
  };

  const clearCartItem = () => {
    setCartItems(getDefaultCart(allProducts));
  };

  // Provide allProducts, not all_products
  const contextValue = {
    getTotalCartItems,
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    clearCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
