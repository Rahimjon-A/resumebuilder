import React, { useState } from "react";
import mainImg from "../../../public/introMain.avif";

const Login = () => {
  const [showFirstGreeting, setShowFirstGreeting] = useState(true);

  const handleClick = () => {
    setShowFirstGreeting(!showFirstGreeting);
  };

  return (
    <div className="h-screen container mx-auto lg:px-[100px] flex items-center justify-center ">
      <div className="w-[600px]  hidden sm:block md'block">
        <img src={mainImg} alt=""   />
      </div>
      <div>
        {showFirstGreeting ? (
          <div className="flex flex-col items-start justify-end h-[280px]">
            <form action="" className="flex flex-col items-center justify-center gap-4">
              <input type="email" placeholder="Email or username" className="pl-4 py-2 pr-20 outline-none border border-blue-300 rounded-lg"/>
              <input type="text" placeholder="Password" className="pl-4 py-2 pr-20 outline-none border border-blue-300 rounded-lg"/>
              <button className="bg-blue-300 w-full rounded-lg py-2">Login</button>
            </form>
            <p className="mt-2">Forgot Password</p>
            <div className="flex gap-2 mt-3 ">
              <p>Don't have an account?</p>
            <button  onClick={handleClick} className="underline text-blue-800 cursor-pointer">SignUp</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start justify-end h-[280px]">
            <form action="" className="flex flex-col items-center justify-center gap-4">
              <input type="email" placeholder="Mobile or email"   className="pl-4 py-2 pr-20 outline-none border border-blue-300 rounded-lg" />
              <input type="name" placeholder="Full name"  className="pl-4 py-2 pr-20 outline-none border border-blue-300 rounded-lg" />
              <input type="text"  placeholder="Username"  className="pl-4 py-2 pr-20 outline-none border border-blue-300 rounded-lg" />
              <input type="text" placeholder="Password"  className="pl-4 py-2 pr-20 outline-none border border-blue-300 rounded-lg" />
              <button className="bg-blue-300 w-full rounded-lg py-2">SignUp</button>
            </form>
            <div className="flex gap-2 mt-5 ">
              <p>Have an account?</p>
            <button  onClick={handleClick} className="underline text-blue-800 cursor-pointer">Login</button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
