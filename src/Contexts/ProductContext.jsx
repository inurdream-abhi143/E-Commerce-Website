import { Children, createContext, useEffect, useState } from "react";
// import all_product from "../Components/assets/all_product";
import {
  getProductsFromStorage,
  saveProductsToStorage,
} from "../Utils/Storage";

const ProductContext = createContext([]);

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    allProductsList();
  }, []);
  const allProductsList = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  // Save to localStorage whenever allProducts changes
  //   useEffect(() => {
  //     saveProductsToStorage(allProducts);
  //   }, [allProducts]);

  const ProductValues = { allProducts, setAllProducts };
  return (
    <ProductContext.Provider value={ProductValues}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
