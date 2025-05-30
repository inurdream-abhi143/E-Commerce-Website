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
