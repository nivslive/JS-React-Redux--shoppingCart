import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const itemsQuantify = useSelector((store) => store.cart.itemsQuantify)
  const quantity = itemsQuantify;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
