const NavBar = () => {
    return (
        <div className="flex justify-around  h-12 items-center border-1 border-blue-100">
            <h1 className=" text-2xl">BlogVerse</h1>
            <button className=" font-semibold-black hover:bg-blue-100 text-gray-800  p-1 rounded-lg hover "> Home</button>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-800 cursor-pointer">Sign In</button>
                <button className=" font-semibold-black bg-blue-400 rounded-xl cursor-pointer p-2">Sign Up</button>
            </div>
        </div>

    )
}
export default NavBar