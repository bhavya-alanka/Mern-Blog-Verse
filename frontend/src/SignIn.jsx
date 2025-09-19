const SignIn=()=>{
    return(

        <div className="flex items-center flex-col mt-10 gap-5 align-middle " >
            
            <form className="flex flex-col border-1 border-black w-1/3 p-5 items-center gap-5 rounded-xl align-middle justify-items-center">
            <div className="w-[80%] flex flex-col gap-2 ">
                <p className="text-md text-black-8xl text-center shadow-3xl text-2xl font-bold">Sign In<br></br> Access your account</p>
                <p className="text-md text-black-700">Email Address</p>
                <input type="text-1xl text-center" placeholder="sample@gmail.com" className="border-1 border-black-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-black-500" />
            </div>
            <div className="w-[80%] flex flex-col gap-2">
                <p className="text-md text-black-700">Password</p>
                <input type="text-1xl text-center" placeholder="sample123" className="border-1 border-black-500 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-black-500" />
            <div className="flex">
                <input type="checkbox" name="" id="" className="h-5 w-5" />
                <p className="text-md text-black-500 flex relative"></p>Remember me<p className="text-md text-black-400 text-blue-400"><span className="text-blue-500 gap-5 justify-around">Forgot password?</span></p>  
              </div>  
              </div>
            <button className="w-[50%] bg-blue-500 py-4 text-white rounded-xl font-semibold">Sign In</button>
                <div className="border-[0.5px] w-[50%] mt-4 border-black-400"></div>
                <p className="font-semibold text-black-700">Don't have an Account?<span className="text-blue-500">Create one here</span></p>
            <button className=" font-semibold text-black rounded-xl w-[60%] py-3 cursor-pointer hover:bg-text-black"></button>
           
            </form>

        </div>
    )

}
export default SignIn