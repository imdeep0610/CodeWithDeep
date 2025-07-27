const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
            <form>
                <input type="text" placeholder='Enter your name ' className="p-2 m-2 border border-black" />
                <input type="text" placeholder='Enter your message' className="p-2 m-2 border border-black"/>
                <button className="border border-black p-2 m-2 bg-gray-500 rounded-lg">Submit</button>
            </form>
        </div>
     )
}
export default Contact