export const saveOrderToLocalStorage = (orderDetails) => {
  const existingOrders = JSON.parse(localStorage.getItem("orderDetails")) || [];
  const updatedOrders = [...existingOrders, orderDetails];
  localStorage.setItem("orderDetails", JSON.stringify(updatedOrders));
};
