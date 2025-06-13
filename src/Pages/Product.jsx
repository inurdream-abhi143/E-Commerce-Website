import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import { data, useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/Productdisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  // const [product, setProducts] = useState([]);
  // useEffect(() => {
  //   AllProduct();
  // }, []);
  // const AllProduct = () => {
  //   fetch("http://localhost:4000/products")
  //     .then((res) => res.json)
  //     .then((data) => console.log(data));
  // };
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
