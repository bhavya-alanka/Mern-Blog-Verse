import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className=" w-full flex justify-around  h-12 items-center border-2 border-black-100">
            <h1 className=" text-2xl">BlogVerse</h1>
            <Link to="/" className=" font-semibold-black hover:bg-blue-100 text-gray-800 text-2xl  p-1 rounded-lg hover "> Home</Link>
            <div className="flex gap-5">
                <Link to="/SignIn" className="font-semibold text-black-800 cursor-pointer">Sign In</Link>
                <Link to="SignUp" className=" font-semibold-black bg-blue-500 rounded-xl cursor-pointer p-2">Sign Up</Link>
            </div>
        </div>

    )
}
export default NavBar