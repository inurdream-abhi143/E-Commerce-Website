import { children, createContext, useEffect, useState } from "react";

// import all_product from "../Components/assets/all_product";

const ProductContext = createContext([]);

const ProductContextProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    productList();
    // UpdateProductList();
  }, []);

  const productList = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
    // .then(console.log);
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
