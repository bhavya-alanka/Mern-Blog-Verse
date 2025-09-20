import React from "react";
import NavBar from "./NavBar.jsx";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Proportions } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
const SignIn = () => {
  
  

  return (
    <div className="flex items-center flex-col  gap-5 align-middle ">
      <NavBar />

      <form className="flex flex-col border-1 border-black w-1/3 p-5 items-center gap-5 rounded-xl align-middle justify-items-center">
        <div className="w-[80%] flex flex-col gap-2 ">
          <p className="text-md text-black-8xl text-center shadow-3xl text-2xl font-bold">
            Sign In<br></br> Access your account
          </p>
          <p className="text-md text-black-700">Email Address</p>
          <div className="relative">
            <input
              onChange={handleChange}
              type="text-1xl text-center"
              placeholder="sample@gmail.com"
              className="border-1 border-black-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-black-500"
            />
            <User className="absolute top-3 left-0.5 " />
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-2">
          <p className="text-md text-black-700">Password</p>
          <div className="relative ">
            <input
              onChange={handleChange}
              type="text-1xl text-center"
              placeholder="sample123"
              className="border-1 border-black-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-black-500 pl-12 "
            />
            <LockKeyhole className="absolute top-3 left-0.5 " />

            <p onClick={handlePassword}>
              {showPassword ? (
                <Eye className="absolute right-3 top-4" />
              ) : (
                <EyeOff className="absolute right-3 top-4" />
              )}
            </p>
          </div>
        </div>
        <div className="flex w-[80%] justify-between">
          <input type="checkbox" name="" id="" className="h-5 w-5" />
          <p className="text-md text-black-500 flex relative"></p>Remember me
          <p className="text-md text-black-400 text-blue-400">
            <span className="text-blue-500 gap-5 justify-right">
              Forgot password?
            </span>
          </p>
        </div>

        <button className="w-[50%] bg-blue-500 py-4 text-white rounded-xl font-semibold">
          Sign In
        </button>
        <div className="border-[0.5px] w-[50%] mt-4 border-black-400"></div>
        <p className="font-semibold text-black-700">
          Don't have an Account?
          <Link className="text-blue-500">Create one here</Link>
        </p>
        <button className=" font-semibold text-black rounded-xl w-[60%] py-3 cursor-pointer hover:bg-text-black"></button>
      </form>
    </div>
  );
};
export default SignIn;
