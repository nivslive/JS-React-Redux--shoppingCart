import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  let totalItems = useSelector((store) => store.cart.itemsList);
  let total = 0;

  totalItems.map((e) => {
    total += e.totalPrice
  });
  const showCart = useSelector((store) => store.cart.showCart)

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showCart && <CartItems />}
        
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
