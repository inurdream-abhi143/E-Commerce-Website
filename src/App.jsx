import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import AdminRoutes from "./AdminRoutes";

function App() {
  console.log("App Rendered");

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PublicRoute />}></Route>
            <Route path="/admin/*" element={<AdminRoutes />}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
