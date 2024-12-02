import SignIn from "@/features/Auth/components/SignIn";
import { test } from "@/backend/api";
import { useEffect } from "react";

const SignInPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      await test();
    };
    fetchData();
  }, []);
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
