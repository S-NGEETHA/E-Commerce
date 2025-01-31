import React, { createContext, useEffect, useState } from 'react'
import all_product from "../components/Assets/all_product"

export const ShopContext=createContext(null);

const geDefaultValue = ()=>{
  let cart={};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index]=0;        
  }
  return cart;
}
const getInitialcart=()=>{
   const savedCart=localStorage.getItem('saved');
   return savedCart?JSON.parse(savedCart):geDefaultValue();
}

const ShopContextProvider = (props) => {
  
     const[cartItems,setcartItems] = useState(getInitialcart());
    
     useEffect(()=>{
      localStorage.setItem("saved", JSON.stringify(cartItems));
     },[cartItems]);
   
    const addToCart=(itemId)=>{
      setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))      
    }

    const removeFromCart=(itemId)=>{
      setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      
    }

    const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo=all_product.find((product)=>product.id===Number(item))
          totalAmount+=cartItems[item]*itemInfo.new_price;
        }
      }
      return totalAmount;
    }

    const getTotalCartItems=()=>{
      let totalItem=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          totalItem+=cartItems[item];
        }
      }
      return totalItem;
    }

    const contextValue={getTotalCartItems,all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider