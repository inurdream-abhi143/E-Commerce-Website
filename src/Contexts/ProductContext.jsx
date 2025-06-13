import { createContext, useEffect, useState } from "react";

// import all_product from "../Components/assets/all_product";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <ProductContext.Provider value={{ allProducts, setAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
