import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/banner_mens.png";
import women_banner from "./Components/assets/banner_women.png";
import kid_banner from "./Components/assets/banner_kids.png";
import ShipingMethod from "./Components/ShipingMethod/ShipingMethod";
import Payment from "./Components/Payment/Payment";
import ConfirmOrder from "./Components/Confirmorder/ConfirmOrder";
import OrderFail from "./Components/OrderFail/OrderFail";
import Login from "./Components/LoginSignPages/Login";
import Signup from "./Components/LoginSignPages/Signup";
import LoginSignup from "./Pages/LoginSignup";

const PublicRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<ShipingMethod />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/confirmorder" element={<ConfirmOrder />}></Route>
        <Route path="/orderfail" element={<OrderFail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default PublicRoute;
