import { useState } from "react"

 export default function Hero(){
    const [color,setcolor]=useState(' ')
    const Changecolor =()=>{
setcolor("red")
    }
    const resetcolor =()=>{
        setcolor("black")
            }
    return (
        <div>
           <div className="flex justify-center">
           <div className="bg-red-100 w-[300px]  rounded-xl mt-10 p-4 ">
<h1 style={{color:color}}>change color</h1>
<div className="p-2 gap-2">
<button onClick={Changecolor} className="bg-green-600 p-3 border-2">change color </button><br></br>
<button onClick={resetcolor} className="bg-blue-600 mt-2 p-3 border-2">resetcolor </button>
</div>
            </div>
           </div>
        </div>
    )
 }