import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Route ,Routes} from 'react-router-dom';
import {useState} from "react";
const Cart = () => { 
    // const [newData,setNewData] = useState();
    const data= useSelector((state)=>state.cartData)
    console.log("Cart",data);
 
  return (
    <div>
   <Link to="/cart"><h3 >Product List</h3></Link>   
   <div style={{display:"flex",marginRight:"30px",marginLeft:"30px"}}> 
<table style={{borderCollapse:"collapse",flex:"65%"}}>
    <tr>
        <td>S.No</td>
    <td>NAME</td>
    <td>PHONE</td>
    <td>Email</td>
    <td>website</td>
    </tr>
    {
        data.map((value,i)=>
            <tr key={value.id}>
                <td style={{border:"1px solid black",padding:"15px"}}>{i}</td>
                <td style={{border:"1px solid black",padding:"15px"}}>{value.name}</td>
                <td style={{border:"1px solid black",padding:"15px"}}>{value.phone}</td>
                <td style={{border:"1px solid black",padding:"15px"}}>{value.email}</td>
                <td style={{border:"1px solid black",padding:"15px"}}>{value.website}</td>

            </tr>
        
        )
}
</table>
<div style={{flex:"35%",margin:"0px 30px"}} className='price-detailes'>
    <div style={{display:"flex",justifyContent:"space-around",marginBottom:"10px",paddingBottom:"10px",borderBottom:"1px solid black"}}><span >Amount</span><span>0000</span></div>
    <div style={{display:"flex",justifyContent:"space-around",marginBottom:"10px",paddingBottom:"10px",borderBottom:"1px solid black"}}><span >Discount</span><span>0000</span></div>
    <div style={{display:"flex",justifyContent:"space-around",marginBottom:"10px",paddingBottom:"10px",borderBottom:"1px solid black"}}><span >Tax</span><span>0000</span></div>
    <div style={{display:"flex",justifyContent:"space-around",marginBottom:"10px",paddingBottom:"10px",borderBottom:"1px solid black"}}><span >Total</span><span>0000</span></div>
    </div> 
</div>
    </div>
  )
}

export default Cart;