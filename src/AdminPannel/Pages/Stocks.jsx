import React, { useEffect, useState } from "react";
import "../Styles/Stocks.css";
import StockBar from "../Components/StcokBar/StockBar";
import { toast } from "react-toastify";
// import all_product from "../../Components/assets/all_product";
// import { ProductContext } from "../../Contexts/ProductContext";
const Stocks = () => {
  const [stocks, setStocks] = useState({}); // uddating stocks
  const [filterCategory, setFilterCategory] = useState(""); // for filter
  const [filteredProducts, setfilteredProducts] = useState([]);
  // const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 10;
  // const { allProducts } = useContext(ProductContext);
  useEffect(() => {
    productList();
    // UpdateProductList();
  }, []);
  // Pagination

  const productList = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // .then(console.log);
  };

  const handleStocks = (id) => {
    const addStockValue = Number(stocks[id]); // What user entered to add
    if (isNaN(addStockValue) || addStockValue <= 0) {
      toast.warn("Please enter a valid number greater than 0");
      return;
    }

    // Find the current product from products state
    const product = products.find((p) => p.id === id);
    if (!product) {
      toast.warn("Product not found");
      return;
    }

    // Calculate new total stocks
    const newTotalStocks = product.stocks + addStockValue;

    const stockData = { stocks: newTotalStocks };

    fetch(`http://localhost:4000/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stockData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update product stocks");
        return res.json();
      })
      .then((updatedProduct) => {
        // Update local state with new stock count
        setProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod.id === id ? { ...prod, stocks: updatedProduct.stocks } : prod
          )
        );

        // Clear the input for this product
        setStocks((prev) => ({ ...prev, [id]: "" }));

        toast.success(
          `Stock updated to ${updatedProduct.stocks} successfully!`
        );
      })
      .catch((err) => {
        console.error(err);
        toast.warning("Error updating stocks, try again.");
      });
  };
  const handleFilterStocks = () => {
    // console.log("filterCteogory is ", filterCategory);
    const filtered = products.filter((filterproduct, i) => {
      return filterproduct.category === filterCategory;
      // console.log("filter product", );
    });
    setfilteredProducts(filtered);
  };
  const handleResetFilter = () => {
    setfilteredProducts([]);
    setFilterCategory("");
    console.log("It's Working ");
  };

  const displayProduct =
    filteredProducts.length > 0 ? filteredProducts : products;

  useEffect(() => {
    console.log(displayProduct);
  }, [displayProduct]);

  const sortedDisplayProduct = displayProduct.sort(
    (a, b) => a.stocks - b.stocks
  );
  // console.log(sortedDisplayProduct);

  const totalPages = Math.ceil(sortedDisplayProduct.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = sortedDisplayProduct.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  // console.log(`current  page ${currentPage} totalPages${totalPages} `);

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
    <div className="container all_Stocks">
      <StockBar
        handleFilterStocks={handleFilterStocks}
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
        handleResetFilter={handleResetFilter}
      />
      <div className="stocks-table-container">
        <table>
          <thead>
            <tr>
              {/* Added missing tr tag */}
              <th>Sr.No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              {/* <th>Description</th> Fixed spelling */}
              <th>Price</th>
              <th>Discount Price</th> {/* Fixed spelling */}
              <th>Stock</th>
              <th>Add Stocks</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product, i) => {
              // Changed to currentItems
              const itemNumber = indexOfFirstItem + i + 1; // Fixed index calculation
              return (
                <tr key={itemNumber}>
                  {/* Added key prop */}
                  <td>{itemNumber}</td> {/* Fixed sequential numbering */}
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "30px",
                        backgroundPosition: "top",
                        backgroundSize: "contain",
                      }}
                      className="image-fluid rounded-circle"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  {/* <td>{product.description || "N/A"}</td>{" "} */}
                  {/* Changed from image to description */}
                  <td>${product.old_price}</td>
                  <td>${product.new_price}</td>
                  <td className="stocks">
                    {product.stocks < 15 ? (
                      <span className="low-stocks">{product.stocks}</span>
                    ) : (
                      product.stocks
                    )}
                  </td>
                  {/* <td>{product.image}</td> */}
                  <td>
                    <input
                      type="text"
                      className="addstock"
                      value={stocks[product.id]}
                      onChange={(e) => {
                        setStocks({ ...stocks, [product.id]: e.target.value });
                      }}
                    />
                    <button
                      className="addstockbtn"
                      onClick={() => handleStocks(product.id)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <button
          className="pagebtn"
          onClick={() => {
            getPrevPage();
          }}
        >
          PREV
        </button>
        <p className="admin-items-per-page">
          {`  ${currentPage} - ${totalPages} of ${displayProduct.length} Products  `}
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
