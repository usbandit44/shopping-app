import ClothingItemDiscover from "@/features/Discover/components/ClothingItemDiscover/ClothingItemDiscover";
import React from "react";

const DiscoverPage = () => {
  const temp = new Array(20).fill(0);
  return (
    <div
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
      id="discover_page"
    >
      {temp.map((item, index) => (
        <ClothingItemDiscover item_id={index.toString()} key={index} />
      ))}
    </div>
  );
};

export default DiscoverPage;
