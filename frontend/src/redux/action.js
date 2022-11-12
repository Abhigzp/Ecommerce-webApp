
import {ADD_TO_CART,REMOVE_TO_CART,EMPTY_TO_CART} from './Constant';
export const addToCart=(data)=>{
    console.log("action  is called",data);
    return{
        type:ADD_TO_CART,
        data:data
    }    
}
export const removeToCart=(data)=>{
    console.log("action  is called",data);
    return{
        type:REMOVE_TO_CART,
        data:data
    }    
}
export const emptyToCart=(data)=>{
    console.log("action  is called",data);
    return{
        type:EMPTY_TO_CART,
        data:[]
    }    
}