import React from "react";
import { useState } from "react";
import "./Product.scss";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://product.hstatic.net/1000284478/product/50crs_3afdb0326_1_b51bef8518b14c22bedae00a88661d1b_large.jpg",
    "https://product.hstatic.net/1000284478/product/50crs_3afdb0326_2_f80fee91c06841a0a4e99d44cd5d4ad1_large.jpg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>MLB</h1>
        <span className="price">$199</span>
        <p>Basic Mega Logo Long Sleeve Collar Jacket</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <MdAddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <MdFavoriteBorder />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <FaBalanceScaleLeft />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor :Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
