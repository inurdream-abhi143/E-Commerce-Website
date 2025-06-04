import React from "react";
import { CiSearch } from "react-icons/ci";

const StockBar = () => {
  return (
    <div className="stock-bar">
      <input type="text" />
      <button>
        <CiSearch />
      </button>
    </div>
  );
};

export default StockBar;
