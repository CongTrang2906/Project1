import React from "react";
import "./Cart.scss";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://product.hstatic.net/1000284478/product/01_536477_2_fc38ed319e2c42b8b7aa63f2e1f971b9_grande.jpg",
      img2: "https://product.hstatic.net/1000284478/product/01_536159_2_e1515e2ba5d344dbaf5541907547f933_grande.jpg",
      title: "MLB",
      desc: "MLB",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://product.hstatic.net/1000284478/product/01_536371_2_3d453d528f5248cc9a973674e048c3d9_grande.jpg",
      title: "Puma Basketball",
      desc: "Puma Basketball",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <AiOutlineDelete className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset"> Reset Cart</span>
    </div>
  );
};

export default Cart;
