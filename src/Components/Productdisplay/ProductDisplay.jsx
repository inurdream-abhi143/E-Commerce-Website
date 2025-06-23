import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Contexts/ShopContext";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="thumb-1" />
          <img src={product.image} alt="thumb-2" />
          <img src={product.image} alt="thumb-3" />
          <img src={product.image} alt="thumb-4" />
        </div>

        <div className="productdisplay-img">
          <div className="productdisplay-main-img">
            <Zoom
              zoomMargin={30}
              overlayBgColorEnd="rgba(0, 0, 0, 0.2)"
              transitionDuration={250}
              wrapElement="div"
            >
              <img
                alt={product.name}
                src={product.image}
                width="100%"
                style={{
                  maxWidth: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.25s ease-in-out",
                }}
              />
            </Zoom>
          </div>
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star-dull" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, breathable t-shirt crafted from premium cotton.
          Designed for all-day comfort with a clean, relaxed fit.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="productdisplay-right-price-new">
          {product.stocks} Product left
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-catergory">
          <span>Category:</span> Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-catergory">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
