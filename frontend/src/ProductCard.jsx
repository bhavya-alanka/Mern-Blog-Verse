const ProductCard = () => {

    return (
        <div className="border-2 border-black w-[300px] flex flex-col items-center gap-10 p-4 rounded-2xl animate-none ">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-2 border-black rounded-full" />
            <div className="flex flex-col gap-5 items-center">
                <h2 className="font-bold text-lg text-blue-500  ">Product 1</h2>
                <p className="text-black-300 font-bold text-center">This is a sample Product of simple texting</p>
                <p className="font-bold text-green-500">$20.00</p>
            </div ><button className="bg-blue-400 text-shadow-white w-[200px] rounded-2xl cursor-pointer hover:bg-blue-400" >Add to Cart</button>
        </div>
    )

}
export default ProductCard