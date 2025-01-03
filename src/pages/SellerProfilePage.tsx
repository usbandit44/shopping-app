import ProfileForm from "@/features/Profile/components/ProfileForm/ProfileForm";
import React from "react";

const SellerProfilePage = () => {
  return (
    <div
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
      id="seller_profile_page"
    >
      <ProfileForm />
    </div>
  );
};

export default SellerProfilePage;
