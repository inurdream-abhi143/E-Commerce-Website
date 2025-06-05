import all_product from "../Components/assets/all_product";
import Product from "../Pages/Product";

export const saveOrderToLocalStorage = (orderDetails) => {
  const existingOrders = JSON.parse(localStorage.getItem("orderDetails")) || [];
  const updatedOrders = [...existingOrders, orderDetails];
  localStorage.setItem("orderDetails", JSON.stringify(updatedOrders));
};

export const saveUserInfoToLocalStorage = (signupInfo) => {
  const oldUserInfo = JSON.parse(localStorage.getItem("signupInfo")) || [];

  const newUserInfo = [...oldUserInfo, signupInfo];

  localStorage.setItem("signupInfo", JSON.stringify(newUserInfo));
};

// NOt used yet
const STORAGE_KEY = "allProducts";

export const getProductsFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProductsToStorage = (products) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};
// export const saveProductsToLocalStorage = (products) => {
//   const oldProduct = JSON.parse(localStorage.getItem("all_products")) || [];
//   const updateProduct = [...oldProduct, ...products];
//   localStorage.setItem("all_products", JSON.stringify(updateProduct));
// };

// export const getProductFromLocalStorage = () => {
//   const products = JSON.parse(localStorage.getItem("all_products"));
//   return Array.isArray(products) ? products : [];
// };
