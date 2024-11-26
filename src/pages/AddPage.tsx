import AddItemForm from "@/features/Add/components/AddItemForm/AddItemForm";
import React from "react";

const AddPage = () => {
  return (
    <div
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
      id="add_page"
    >
      <AddItemForm />
    </div>
  );
};

export default AddPage;
