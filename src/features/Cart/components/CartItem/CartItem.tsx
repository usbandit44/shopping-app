import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = (props: { item_id: string }) => {
  return (
    <div className="flex w-full  item-center justify-between">
      <div className="flex flex-col gap-2">
        <small className="text-sm font-medium leading-none">Item Name</small>
        <small className="text-sm font-medium leading-none">Size:</small>
        <small className="text-sm font-medium leading-none">Price:</small>
      </div>
      <button>
        <DeleteIcon fontSize="medium" />
      </button>
    </div>
  );
};

export default CartItem;
