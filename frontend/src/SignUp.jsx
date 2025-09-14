const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5 ">
            <h1 className="text-2xl text-blue-500 font-bold  ">Join BLog Verse</h1>
            <p className=" text-1xl text-grey-600 text-center font-semibold ">Create Your Account<br></br> and Start your Blogging Journey</p>
            <form className=" flex flex-col border-1 border-black w-1/3 p-5 items-center gap-5">
                <div className="w-[90%] flex flex-col gap-2" >

                    <p className="text-md text-gray-700">Full Name</p>
                    <input type="text-1xl text-center" placeholder="Enter your Full Name" className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2" >

                    <p className="text-md text-gray-700">email</p>
                    <input type="text -1xl text-center" placeholder="Enter your email" className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2" >

                    <p className="text-md text-gray-700"> password</p>
                    <input type="text-1xl text-center" placeholder="Enter your password" className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="w-[90%] flex flex-col gap-2" >

                    <p className="text-md text-gray-700">confirm password</p>
                    <input type="text-1xl text-center" placeholder="enter your confirm password" className="border-1 border-gray-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-4 px-3 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-3 " />
                    <p>I agree to the Terms and conditions</p>
                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold">Create Account</button>
                <div className="border-[0.5px] w-[90%] mt-4 border-gray-400"></div>
                <p className="font-semibold text-gray-700">Already have an Account?<span className="text-purple-400">Sign in here</span></p>
                <button className="font-semibold text-gray-700 rounded-xl w-[90%] py-4 cursor-pointer hover:bg-text-gray">Back to home</button>
            </form>
        </div>


    )
}
export default SignUp