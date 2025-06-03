import React, { useState } from "react";
import all_product from "../../Components/assets/all_product";
import "../Styles/Stocks.css";
import StockBar from "../Components/StcokBar/StockBar";

const Stocks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(all_product.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = all_product.slice(indexOfFirstItem, indexOfLastItem);
  console.log(`current  page ${currentPage} totalPages${totalPages} `);

  const getNextPage = () => {
    // currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const getPrevPage = () => {
    // currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="all_Stocks">
      <StockBar />
      <table>
        <thead>
          <tr>
            {" "}
            {/* Added missing tr tag */}
            <th>Sr.No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th> {/* Fixed spelling */}
            <th>Price</th>
            <th>Discount Price</th> {/* Fixed spelling */}
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, i) => {
            // Changed to currentItems
            const itemNumber = indexOfFirstItem + i + 1; // Fixed index calculation
            return (
              <tr key={itemNumber}>
                {" "}
                {/* Added key prop */}
                <td>{itemNumber}</td> {/* Fixed sequential numbering */}
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description || "N/A"}</td>{" "}
                {/* Changed from image to description */}
                <td>${product.new_price}</td>
                <td>${product.old_price}</td>
                <td>{product.stocks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="stocks-pagination">
        <button
          className="pagebtn"
          onClick={() => {
            getPrevPage();
          }}
        >
          PREV
        </button>
        <p className="items-per-page">
          {`  ${currentPage} - ${totalPages} of ${all_product.length} Products  `}
        </p>
        <button
          className="pagebtn"
          onClick={() => {
            getNextPage();
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Stocks;
