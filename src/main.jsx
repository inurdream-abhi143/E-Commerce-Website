import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Contexts/ShopContext.jsx";
import { ShippingContextProvider } from "./Contexts/ShippingContext.jsx";
import { PaymentContextProvider } from "./Contexts/PaymentContext.jsx";
import { LoginContextProvider } from "./Contexts/LoginContext.jsx";
import { ProductContextProvider } from "./Contexts/ProductContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <ShippingContextProvider>
      <PaymentContextProvider>
        <LoginContextProvider>
          <ShopContextProvider>
            <App />
            <ToastContainer />
          </ShopContextProvider>
        </LoginContextProvider>
      </PaymentContextProvider>
    </ShippingContextProvider>
  </ProductContextProvider>
);
