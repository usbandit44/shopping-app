import ClothingItemShop from "@/features/Discover/components/ClothingItemShop/ClothingItemShop";
import React from "react";

const ShopPage = () => {
  const [itemIds, setItemIds] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/sellerItems/", {
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
        const ids = result.item.map((item: { cl_id: number }) => item.cl_id);
        setItemIds(ids);
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
  return (
    <div
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
      id="shop_page"
    >
      {itemIds.map((item, index) => (
        <ClothingItemShop item_id={item} key={index} />
      ))}
    </div>
  );
};

export default ShopPage;
