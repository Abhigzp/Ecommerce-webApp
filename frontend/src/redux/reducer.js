import {ADD_TO_CART,REMOVE_TO_CART,EMPTY_TO_CART} from './Constant';
export const cartData =(data=[],action)=>{

//    if(action.type === ADD_TO_CART){
//     console.log("Add_TO_Cart Condition",action);
//     return action.data
//    } else {
//     return "no action matched"
//    }


switch(action.type){
    case ADD_TO_CART:
        console.log("ADD_TO_CART CONDITION ", action)
        return  [action.data,...data]
    
            

    case REMOVE_TO_CART:
                // remove to cart logic 
              
               const remainingData= data.filter((v)=>v.id!==action.data
               )
               console.log("removing elements one by one by ID ", remainingData)
                return  [...remainingData]
                
               
    case EMPTY_TO_CART:
    data=[];
    return data
  default:
     // no case matched 
 return data;       
}
}