import ClothingItemDiscover from "@/features/Discover/components/ClothingItemDiscover/ClothingItemDiscover";
import ClothingItemLiked from "@/features/Discover/components/ClothingItemLiked/ClothingItemLiked";
import React, { createContext } from "react";

const LikedPage = () => {
  const [itemIds, setItemIds] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/likedItems/", {
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
        const ids = result.item.map((item: { l_item: number }) => item.l_item);
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

  return (
    <div
      id="liked_page"
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
    >
      {itemIds.map((item, index) => (
        <ClothingItemLiked item_id={item} key={index} />
      ))}
    </div>
  );
};

export default LikedPage;
