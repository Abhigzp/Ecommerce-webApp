import React from 'react'
import { useState } from 'react';
const Cart = () => {
const [count,setCount] = useState(0);

const Subtraction=()=>{
    console.log("Sub");
setCount(count-5);
console.log(count);
return;
}

const addition = () =>{
    setCount(count+5);
    console.log(count);
    return;
}


  return (
    <div>
        
       <button type='button' onClick={()=>Subtraction()}>Sub</button> 
       <h1>{count}</h1>
       <button type='button'    onClick={()=>addition()}   >Add</button>
        
        </div>
  )
}

export default Cart