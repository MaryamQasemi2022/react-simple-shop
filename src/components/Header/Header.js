import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { Navbar } from "./../index";
import { BsBasket2Fill } from "react-icons/bs";
import CartContext from "../../contexts/CartContext";

const Header = () => {
  const { carts } = useContext(CartContext);
  const { pathname } = useLocation();
  let title = "Home";
  if (pathname.includes("about")) {
    title = "About us";
  }
  if (pathname.includes("contact")) {
    title = "Contact us";
  }
  if (pathname.includes("blog")) {
    title = "Blog";
  }
  if (pathname.includes("product")) {
    title = "single product";
  }
  if (pathname.includes("cartpage")) {
    title = "cartpage";
  }

  return (
    <div className="Header">
      <Navbar />
      <div className="title">
        <h3>{title}</h3>
        <div>
          <Link to="/cartpage">
            <BsBasket2Fill style={{ fontSize: "1.5rem" }} />
          </Link>

          <span>{carts.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
