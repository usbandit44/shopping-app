import CartHolder from "@/features/Cart/components/CartHolder/CartHolder";
import React from "react";

const CartPage = () => {
  return (
    <div
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10 w-screen"
      id="cart_page"
    >
      <CartHolder />
    </div>
  );
};

export default CartPage;
