import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/36px-Flag_of_Vietnam.svg.png"
              alt=""
            />
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="item">
            <span>VN</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            MASTER
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Store
            </Link>
          </div>
          <div className="icons">
            <AiOutlineSearch />
            <BsPerson />
            <MdOutlineFavoriteBorder />
            <div
              className="cartIcon"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <GiShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
