import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/Productdisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log("all the product", allProducts);
  // console.log("product id", productId);
  // Defensive: wait for products to load
  if (!allProducts || allProducts.length === 0) {
    return <div>Loading...</div>;
  }

  const product = allProducts.find((e) => e.id == productId);
  if (!product) {
    return <div>Product not found.</div>;
  }

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
