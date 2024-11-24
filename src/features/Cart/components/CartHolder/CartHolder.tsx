import React from "react";
import CartItem from "@/features/Cart/components/CartItem/CartItem";
import { Separator } from "@/components/ui/separator";

const CartHolder = () => {
  const temp = new Array(20).fill(0);
  return (
    <div className="w-[60%] flex flex-col gap-2">
      {temp.map((item, index) => (
        <>
          {" "}
          <CartItem item_id={index.toString()} />
          <Separator />
        </>
      ))}
    </div>
  );
};

export default CartHolder;
