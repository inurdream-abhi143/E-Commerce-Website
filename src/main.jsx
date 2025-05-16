import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Contexts/ShopContext.jsx'
import { ShippingContextProvider } from './Contexts/ShippingContext.jsx'

createRoot(document.getElementById('root')).render(
<ShopContextProvider >
  <ShippingContextProvider>
  <App />
  </ShippingContextProvider>
</ShopContextProvider>
)
