export const saveOrderToLocalStorage = (orderDetails) => {
  const existingOrders = JSON.parse(localStorage.getItem("orderDetails")) || [];
  const updatedOrders = [...existingOrders, orderDetails];
  localStorage.setItem("orderDetails", JSON.stringify(updatedOrders));
};

export const saveUserInfoToLocalStorage = (userInfo) => {
  const oldUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const newUserInfo = { ...oldUserInfo, ...userInfo };

  localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
};
