import ClothingItemDiscover from "@/features/Homepage/components/ClothingItemDiscover/ClothingItemDiscover";
import React from "react";

const DiscoverPage = () => {
  const temp = new Array(20).fill(0);
  return (
    <div
      className="flex flex-wrap justify-center gap-5 mt-20"
      id="discover_page"
    >
      {temp.map((item, index) => (
        <ClothingItemDiscover item_id={index.toString()} />
      ))}
    </div>
  );
};

export default DiscoverPage;
