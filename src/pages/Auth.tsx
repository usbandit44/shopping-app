import { useState } from "react";
import SignIn from "@/features/Auth/components/SignIn";
import SignUp from "@/features/Auth/components/SignUp";

const Auth = () => {
  const [content, setContent] = useState<string>("sign-up");
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      {content === "sign-up" ? <SignUp /> : null}
      {content === "sign-in" ? <SignIn /> : null}
    </div>
  );
};

export default Auth;
