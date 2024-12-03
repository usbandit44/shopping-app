import SignIn from "@/features/Auth/components/SignIn";
import { useEffect } from "react";

const SignInPage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      id="signin_page"
    >
      <SignIn />
    </div>
  );
};

export default SignInPage;
