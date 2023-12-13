import { useState } from "react"

export default function Light(){
const[bgcolor,setbgccolor]=useState('');

const [textcol,settextcolor]=useState()

const on=()=>{
    setbgccolor("yellow")
   settextcolor(true)

}


const off=()=>{
    setbgccolor("white")
    settextcolor(false)
}

    return(
        <div>
             <div className="  ">
<div style={{backgroundColor:bgcolor}} className="w-[300px] h-[300px] ml-[500px] border-orange-500 border-4 rounded-full mt-4">

</div>
<div className=" gap-2 flex ml-[550px] mt-5 ">
<button onClick={on}  style={{color:textcol == true ? "red" : " "}}  className="border-red-600  border-2  w-20 h-10">ON</button><br></br>
<button onClick={off} style={{color:textcol == false ? "red" : " "}} className="border-red-600   border-2 w-20  h-10 ">OFF</button>
</div>
            </div>
        </div>
    )
}