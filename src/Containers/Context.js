import React, { createContext, useState } from "react";
import Catagries from './Catagries'
export const Context = createContext(null)

const getDefaultCart = ()=>{
    let cart = {}
   for( let i = 1 ; i < Catagries.length + 1; i++){
    cart[i]=0
   }
}

export const ContextProvider = (props)=>{
    const [cartitem , setCartitem]  = useState(getDefaultCart())

    const addToCart = (itemId)=>{
        setCartitem((pre)=>({...pre,[itemId]: pre[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartitem((pre)=>({...pre,[itemId]: pre[itemId]-1}))
    }

    const Contextvalue = {cartitem , addToCart , removeFromCart}
    
    return <Context.Provider value={Contextvalue}>{props.children}</Context.Provider>
}