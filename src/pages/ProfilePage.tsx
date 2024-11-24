import ProfileForm from "@/features/Profile/components/ProfileForm/ProfileForm";
import React from "react";

const ProfilePage = () => {
  return (
    <div
      id="profile_page"
      className="relative flex flex-wrap justify-center gap-5 top-16 p-10"
    >
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
