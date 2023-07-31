import React, { useState } from "react";
import Catagries from './Catagries'


import './Menu.css'

export default function Menu() {
    const [Catagrie, setcatagrie] = useState(Catagries)
    
    
    const filtermenu = (result) => {
        const filtereditem = Catagries.filter((e) => {
            return e.item === result
        })
        setcatagrie(filtereditem)
    }
    
    

    return (
        <div className="Food">
            <h1 className="title my-3">Foody Menu</h1>

            <button className=" filter_btn" onClick={() => filtermenu("veg")}>veg</button>
            <button className=" filter_btn" onClick={() => filtermenu("Non-veg")}>Non-veg</button>
            <button className=" filter_btn" onClick={() => filtermenu("Drinks")}>Drinks</button>
            <button className=" filter_btn" onClick={() => filtermenu("Ice Creams")}>Ice Creams</button>
            <button className=" filter_btn active" onClick={() => setcatagrie(Catagries)}>All</button>

            <div className="Cart">
                {Catagrie.map((e) => {
                    const { id, item, Desc, price, image } = e
                    return <div className="Cart_item" key={id}>
                        <div className="cart_img">
                            <img src={image} alt=""></img>
                        </div>
                        <p className="item">{item}</p>
                        <h3 className="Desc">{Desc}</h3>
                        <h5>{price}</h5>
                        <button className="price_btn">Order</button>
                    </div>
                })}
                
            </div>
        </div>
    )
}