import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="w-screen brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/96956889-cd58-48f4-930e-f43fad686c0d/US-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className="w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 p-12 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl my-2">Sign In</h1>
        <input type="email" placeholder="Email Address" className="p-2 my-4 h-14 w-full bg-gray-700 rounded-lg" /> <br />
        <input type="password" placeholder="Password" className="p-2 my-4 h-14 w-full bg-gray-700 rounded-lg" /> <br />
        <button className="p-4 my-4 bg-red-500 w-full rounded-lg"> Sign In</button>

        <p className="py-4">New to Netflix? Sign up Now</p>
      </form>
    </div>
  );
};

export default Login;
