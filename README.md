# 🛒 E-Commerce Website

A fully functional e-commerce frontend built with React, featuring cart, tax handling, shipping methods, payment options (including credit card & cash on delivery), and local JSON-based backend support for products and tax data.

---

## 📦 Features

- 🛍 Product listing with quantity management
- 🛒 Shopping cart with live subtotal
- 🚚 Shipping options with dynamic fee
- 💳 Payment page with credit card and COD
- 📃 Tax logic based on product origin (GST/VAT)
- ✅ Order confirmation with masked card and local storage
- 🧾 Admin Add Product form

---

## 🧱 Tech Stack

- **Frontend:** React.js (with React Router DOM)
- **State Management:** Context API
- **Form Handling:** react-hook-form
- **Notifications:** react-toastify
- **Backend:** JSON Server (mock API)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation Steps

```bash
# Clone the repo
git clone https://github.com/inurdream-abhi143/E-Commerce-Website
cd E-Commerce-Website

# Install dependencies
npm install

# Start JSON server (assumes db.json is setup)
npx json-server --watch db.json --port 4000

# Run React app
npm start
```

---

## 🧾 Folder Structure

```
/src
  /Components
    /CartItems
    /Payment
    /ConfirmOrder
    /AddProduct
  /Contexts
    ShopContext.js
    ShippingContext.js
    PaymentContext.js
  /Utils
    Storage.js
  /Pages
    Home.js
    Checkout.js
    OrderFail.js
```

---

## 🔁 Context Summary

- **ShopContext**: Holds product list, cart logic, stock updates
- **ShippingContext**: Captures and provides shipping information
- **PaymentContext**: Stores selected payment mode, tax details, and final total

---

## 📈 Tax & Total Calculation Logic

Each product has an `origin`. The app fetches tax rates based on this from `/Taxes` endpoint:

```json
{
  "origin": "domestic",
  "name": "GST",
  "taxpercent": 18
}
```

### Calculation Flow:

- Subtotal = price \* quantity
- Tax = subtotal \* taxPercent / 100
- Shipping = based on method (Standard, Express, Same-Day)
- Final Total = subtotal + tax + shipping - discount

Tax breakdown per product is saved to `PaymentContext` and passed to `/confirmorder`.

---

## ✅ Confirm Order Page

Displays:

- Shipping + payment details
- Product table (name, qty, price, subPrice)
- Pricing summary
- Masked card number if credit-card
- Total stored in localStorage

---

## 📂 API Structure (db.json example)

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "new_price": 100,
      "origin": "domestic",
      "stocks": 10
    }
  ],
  "Taxes": [
    {
      "origin": "domestic",
      "name": "GST",
      "taxpercent": 18
    }
  ]
}
```

---

## 🔧 Future Enhancements

- 🔐 Add authentication (JWT/login)
- 📦 Backend: Replace JSON Server with MongoDB or Firebase
- 📈 Order History & Management Panel
- 🗃 Refactor tax logic into reusable service

---

## 👨‍💻 Developer

- Abhi
- GitHub: [@inurdream-abhi143](https://github.com/inurdream-abhi143)

---

> Feel free to fork or extend this app. Happy Coding 💻!
