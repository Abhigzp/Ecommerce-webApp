import React, { useEffect } from 'react' 
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import {removeToCart } from "../redux/action";
import { emptyToCart } from "../redux/action";
import { productList } from "../redux/productAction"
import { useSelector } from "react-redux";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData)
console.log("data from main component from saga -: ",data);
  const product = {
    name: "i phone",
    type: "Mobile",
    price: 10000,
    color: "red",
  };

  useEffect(()=>{
    dispatch(productList());
  },[]);

  return (
    <div>
       <div> <button onClick={() => dispatch(emptyToCart())}>Empty To Cart </button></div> 
      <div style={
    {display:"flex", flexWrap:"wrap"
  }}    className=".products-Container">
{
  data.map((item,i)=>
  <div style={{border:"1px solid black",margin:"20px",padding:"20px"}}  key = {item.id} className=".products-item" >
<div  > Name-:  {item.name}</div>
<div  >Email-: {item.email}</div>
<div  >Passw-: {item.website}</div>
<div  >FirtsN-: {item.username}</div>
<div  >Phone-: {item.phone}</div>
<div>
<button onClick={() => dispatch(addToCart(item))}>Add</button>
<button onClick={() => dispatch(removeToCart(item.id))}>remove</button>
</div>
  </div>)
}

      </div>
    </div>
  );
}

export default Main;
