import React from "react";
import NavBar from "./NavBar.jsx";
import { Link } from "react-router-dom";
import { Airplay } from "lucide-react";
import { Proportions } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
const SignUp = () => {
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    setIsLoading(true)
    event.preventDefault();
    let events = {};
    if (!FormData.fullName) {
      events.fullName = "please enter your full name";
    }
    if (!FormData.email) {
      events.email = "please enter your email";
    }
    if (!FormData.password) {
      events.password = "please enter your password";
    }
    if (!FormData.confirmPassword) {
      events.confirmPassword = "please enter your password";
    } else if (FormData.password !== FormData.confirmPassword) {
      events.confirmPassword = "your password didn't match";
    }
    if (Object.keys(events).length > 0) {
      setErrors(events);
      setIsLoading(false)
    } else {
      setTimeOut(() => {
        setSuccess("your account has been created succesfully");
        setErrors({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setIsLoading(false);
        setIsOpenModal(true);
      }, 3000);
    }
  };
  const handlePassword = () => {
    setShowPassword((password) => !password);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword((password) => !password);
  };
  const handleChange = (event) => {
    setError("");
    setSuccess("");
    setFormData((FormData) => ({
      ...FormData,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({
      ...errors,
      [event.target.name]: "",
    }));
  };
  return (
    <div className="flex items-center flex-col  gap-5 ">
      <NavBar />
      <h1 className="text-2xl text-blue-500 font-bold  ">Join BLog Verse</h1>
      <p className=" text-1xl text-grey-600 text-center font-semibold ">
        Create Your Account<br></br> and Start your Blogging Journey
      </p>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col border-1 border-black w-1/3 p-5 items-center gap-5"
      >
        <div className="w-[90%] flex flex-col gap-2">
          <p className="text-md text-gray-700">Full Name</p>
          <div className="relative">
            <input
              value={FormData.fullName}
              onChange={handleChange}
              name="fullName"
              type="text"
              placeholder="Enter your Full Name"
              className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500 pl-7"
            />
            {error.fullName && (
              <p className="text-red-500"> {errors.fullName}</p>
            )}
            <User className="absolute top-3 left-0.5 " />
          </div>
        </div>
        <div className="w-[90%] flex flex-col gap-2">
          <p className="text-md text-gray-700">email</p>
          <div className="relative">
            <input
              value={FormData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500 pl-7"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <Mail className="absolute top-4 left-0.5 " />
          </div>
        </div>
        <div className="w-[90%] flex flex-col gap-2">
          <p className="text-md text-gray-700"> password</p>
          <div className="relative">
            <input
              value={FormData.password}
              onChange={handleChange}
              name="password"
              type={showPassword ? "password" : "text"}
              placeholder="Enter your password"
              className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500 pl-7"
            />
            {errors.password && (
              <p className="text-red-500"> {errors.password}</p>
            )}
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
        <div className="w-[90%] flex flex-col gap-2">
          <p className="text-md text-gray-700">confirm password</p>
          <div className="relative">
            <input
              value={FormData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type={showConfirmPassword ? "password" : "text"}
              placeholder="enter your confirm password"
              className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500 pl-7"
            />
            {errors.confirmPassword && (
              <p className="text-red-500"> {errors.confirmPassword}</p>
            )}
            <LockKeyhole className="absolute top-3 left-0.5 " />

            <p onClick={handleConfirmPassword}>
              {showConfirmPassword ? (
                <Eye className="absolute  right-3 top-4" />
              ) : (
                <EyeOff className="absolute right-3 top-4" />
              )}
            </p>
          </div>
        </div>
        <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-4 px-3 rounded-xl items-center justify-center">
          <input type="checkbox" name="" id="" className="h-5 w-3 " />
          <p>I agree to the Terms and conditions</p>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button input type="submit">
          <div className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold ">
            <p className=" color-purple-500 right-3 top-4 px-60 ">{isLoading ? "Creating":"Create Account"}</p>
          </div>
        </button>

        <div className="border-[0.5px] w-[90%] mt-4 border-gray-400"></div>
        <p className="font-semibold text-gray-700">
          Already have an Account?
          <Link className="text-purple-400">Sign in here</Link>
        </p>
        <button className="font-semibold text-gray-700 rounded-xl w-[90%] py-4 cursor-pointer hover:bg-text-gray">
          Back to home
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed h-dvh w-dvw border-purple-400 flex justify-center items-center">
          <div className="absolute h-dvh w-dvw bg-black opacity-50 "></div>
          <div className="border-1  border-black p-6 rounded-lg bg-white z-10 ">
            <p className="text-xl font-bold">
              Hello Bhavya! Welcome to Blog Verse
            </p>
            <p className="mb-4">
              Your account has been created successfully. you can now sign in
              and access your account{" "}
            </p>

            <div className=" flex gap-10">
              <Link to="./SignIn" className="px-4 py-2 border-1 rounded-xl ">
                Sign In
              </Link>
              <button
                onClick={() => setIsOpenModal(false)}
                className="px-4 py-2 rounded bg-gray-400 "
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SignUp;
