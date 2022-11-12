import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
const Header = () => {

    const result = useSelector((state)=>state.cartData)

  return (
    <div className="header">
   <Link to="/">  <h3 style={{float:"left",margin:0,padding:"20px"}}>home</h3></Link>  
    <Link to="/cart"> <div className="cart-div">
        <span>{result.length}</span>
        <img src="" alt="cart" />
      </div></Link> 
    </div>
  );
};
export default Header;


/// start from 10th lec