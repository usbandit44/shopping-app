import ClothingItemDiscover from "@/features/Discover/components/ClothingItemDiscover/ClothingItemDiscover";
import React from "react";

const LikedPage = () => {
  const temp = new Array(20).fill(0);
  return (
    <div
      id="liked_page"
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
    >
      {temp.map((item, index) => (
        <ClothingItemDiscover item_id={index.toString()} key={index} />
      ))}
    </div>
  );
};

export default LikedPage;
