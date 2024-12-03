import React from "react";
import CartItem from "@/features/Cart/components/CartItem/CartItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CartHolder = () => {
  const [itemIds, setItemIds] = React.useState([]);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/shoppingCart/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: localStorage.getItem("id"),
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const ids = result.item.map(
          (item: { ca_item: number }) => item.ca_item
        );
        setItemIds(ids);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    }
    const intervalId = setInterval(fetchData, 500);

    return () => clearInterval(intervalId);
  }, []);

  async function handleClick() {
    try {
      const response = await fetch("http://localhost:3000/buyItem/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: localStorage.getItem("id"),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }

    itemIds.forEach(async (id) => {
      try {
        const response = await fetch("http://localhost:3000/sellItem/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    });
  }

  return (
    <div className="w-[60%] flex flex-col justify-center items-center gap-2">
      <div className="w-full flex flex-col gap-2">
        {itemIds.map((item, index) => (
          <>
            {" "}
            <CartItem item_id={item} key={index} />
            <Separator />
          </>
        ))}
      </div>
      {itemIds.length > 0 ? (
        <Button className="self-end" onClick={handleClick}>
          Checkout
        </Button>
      ) : null}
    </div>
  );
};

export default CartHolder;
