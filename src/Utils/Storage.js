export const saveOrderToLocalStorage = (orderDetails) => {
  const existingOrders = JSON.parse(localStorage.getItem("orderDetails")) || [];
  const updatedOrders = [...existingOrders, orderDetails];
  localStorage.setItem("orderDetails", JSON.stringify(updatedOrders));
};

export const saveUserInfoToLocalStorage = (UserData) => {
  const oldUserInfo = JSON.parse(localStorage.getItem("UserData")) || {};

  const newUserInfo = { ...oldUserInfo, ...UserData };

  localStorage.setItem("UserData", JSON.stringify(newUserInfo));
};
