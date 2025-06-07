import React, { useEffect, useState } from "react";
import "../Styles/Stocks.css";
import StockBar from "../Components/StcokBar/StockBar";
// import all_product from "../../Components/assets/all_product";
// import { ProductContext } from "../../Contexts/ProductContext";
const Stocks = () => {
  // const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 10;
  // const { allProducts } = useContext(ProductContext);
  useEffect(() => {
    productList();
  }, []);
  // Pagination

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
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

  const productList = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // .then(console.log);
  };

  return (
    <div className="container all_Stocks">
      <StockBar />
      <table>
        <thead>
          <tr>
            {" "}
            {/* Added missing tr tag */}
            <th>Sr.No</th>
            <th>Image</th>
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
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px" }}
                    className="image-fluid rounded-circle"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description || "N/A"}</td>{" "}
                {/* Changed from image to description */}
                <td>${product.old_price}</td>
                <td>${product.new_price}</td>
                <td>{product.stocks}</td>
                {/* <td>{product.image}</td> */}
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
          {`  ${currentPage} - ${totalPages} of ${products.length} Products  `}
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
