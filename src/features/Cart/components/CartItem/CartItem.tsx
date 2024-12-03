import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { it } from "node:test";

const CartItem = (props: { item_id: string }) => {
  interface Item {
    cl_name: string;
    cl_image: string | null;
    cl_price: string;
    cl_size: string;
    cl_status: string;
    // Add other properties of the item here
  }

  const [item, setItem] = React.useState<Item | null>(null);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/specifiedItemForSale",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: props.item_id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setItem(result.item);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    }
    fetchData();
  }, []);

  async function handleDelete() {
    try {
      const response = await fetch("http://localhost:3000/removeCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          c_id: localStorage.getItem("id"),
          ca_id: props.item_id,
        }),
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }
  return (
    <div className="flex w-full  item-center justify-between">
      <div className="flex flex-col gap-2">
        <small className="text-sm font-medium leading-none">
          {item?.cl_name}
        </small>
        <small className="text-sm font-medium leading-none">
          Size: {item?.cl_size}
        </small>
        <small className="text-sm font-medium leading-none">
          Price: {item?.cl_price}
        </small>
      </div>
      <button onClick={handleDelete}>
        <DeleteIcon fontSize="medium" />
      </button>
    </div>
  );
};

export default CartItem;
