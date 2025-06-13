import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Contexts/ShopContext";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  // useEffect(() => {
  //   getProduct();
  // }, []);
  // const [product, setProduct] = useState([]);
  // const getProduct = () => {
  //   fetch("http://localhost:4000/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     });
  // };
  // console.log("All products", product);
  const { allProducts } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="shopcategory-banner" alt="" src={props.banner} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>
          {` Out ${allProducts.length} products`}
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
