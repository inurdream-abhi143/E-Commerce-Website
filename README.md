# 🛍️ E-Commerce React Application

A fully functional e-commerce web app built with ReactJS, Context API, and useReducer — inspired by modern online shopping platforms. Users can browse products, add them to a cart, enter shipping information, apply discounts, and proceed to payment.

---

## 🚀 Features

- 🛒 **Cart Functionality** — Add/remove items, adjust quantity, see total price.
- 🗂️ **Product Categorization** — Filter items by categories (Men, Women, Kids).
- 🌐 **Routing with React Router** — Seamless page transitions.
- 💸 **Discount System** — Calculate and apply discount logic.
- 📦 **Shipping Method Page** — Capture user details & shipping method.
- 💳 **(Planned) Payment Gateway Integration** — Prepare for Stripe/Razorpay connection.
- 🔍 **Zoom Lens Preview** — Enhance product browsing (coming soon).
- ⚙️ **Global State Management** — Powered by Context API + useReducer.
- 🧾 **Order Confirmation** — Detailed order summary after payment.
- 💾 **Local Storage Integration** — Orders are saved locally for demo purposes.
- 🛠️ **Simple CSS Styling** — Custom look with vanilla CSS.
- 🛂 **Login Page** — Placeholder for future authentication.
- 🧮 **Invoice & Price Calculation** — Subtotals, shipping, discounts, and totals are calculated live.
- 🛍️ **Visual Cart Page** — View, update, and remove products visually.

---

## 🧠 Tech Stack

| Tech                        | Purpose                 |
| --------------------------- | ----------------------- |
| React                       | Frontend UI             |
| React Router                | Routing between pages   |
| Context API + useReducer    | Global state management |
| CSS                         | Styling                 |
| JavaScript (ES6+)           | Core logic              |
| Razorpay / Stripe (Planned) | Payment integration     |

---

## 📂 Folder Structure

```
E-commerce/
├── public/
├── src/
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Cart/
│   │   ├── Items/
│   │   ├── CartItems/
│   │   ├── Payment/
│   │   ├── Confirmorder/
│   │   ├── ShipingMethod/
│   ├── Contexts/
│   │   ├── ShopContext.jsx
│   │   ├── ShippingContext.jsx
│   │   └── PaymentContext.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   └── ShopCategory.jsx
│   ├── assets/
│   └── App.js
├── package.json
└── README.md
```

---

## 🛠️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/inurdream-abhi143/E-Commerce-Website.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**

   Visit: [http://localhost:5173](http://localhost:5173)

---

## 📦 Core Modules & Flow

- **Shop**: Home and category pages display all products. Filter by Men, Women, Kids.
- **Cart**: Add/remove/update items; see totals, discounts, and proceed to checkout.
- **Shipping**: Enter user details and select shipping method (Standard, Express, Same-Day).
- **Payment**: Choose payment mode (Credit Card/Cash on Delivery), input card details, see order cost breakdown.
- **Order Confirmation**: See full order summary and user/shipping/payment info. Orders are saved in browser local storage for demo.

---

## 🔮 Upcoming Features

- 🔍 Product Image Zoom Lens
- 💳 Payment Gateway Integration (Stripe/Razorpay)
- 🧾 Invoice/Order Summary Page
- 🌈 Dark Mode Toggle
- 🔒 User Authentication & Registration

---

## 👏 Contributing

Contributions, suggestions, and improvements are welcome! If you'd like to add features or fix bugs, feel free to fork the repo, open a pull request, or create an issue.

---

## 🙌 Acknowledgements

Tutorial inspired by [GreatStack](https://www.youtube.com/watch?v=jbfuzcrfjqQ) — extended with custom features and personalized improvements.

---

## 📧 Contact

Built by **@Abhi** — MERN Stack trainee and builder of cool things.  
Feel free to connect or contribute!
