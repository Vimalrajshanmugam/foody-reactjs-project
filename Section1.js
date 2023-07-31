import React, { useState } from "react";
import '../Containers/Section1.css'
import Section1Image from '../Containers/images/Section1-right-image.webp'
import CountUp from 'react-countup'

export default function Section1(){
    const [count1 , setCount1] = useState(0)
    const counting=()=>{setCount1(<CountUp start={10} end={100} duration={10}/>)}
    const [count2 , setCount2] = useState(0)
    const counting2=()=>{setCount2(<CountUp start={100} end={1000} duration={8}/>)}
    const [count3 , setCount3] = useState(0)
    const counting3=()=>{setCount3(<CountUp start={0} end={10} duration={5}/>)}
    return(
        <>
        <div className="Section1 ">
        <div className="Section1-left">
            <h1>Enjoy <span>home made meals</span> far away from home</h1>
            <p>Helping you enjoy comfortable and healthy food anywhere and anytime on the go</p>
            <button>Order Now</button>
        </div>
        <div className="Section1-right">
            <div className="Section1-right-image">
                <img className="img-fluid" src={Section1Image} alt=""></img>
            </div>
        </div>
        </div>
        <div className="Section1-numbers">
            <div>
                <p className="Section1-numbers-num" onMouseOver={counting}>{count1}+</p>
                <p className="Section1-numbers-text text-muted">Food Partners</p>
            </div>
            <div>
                <p className="Section1-numbers-num"  onMouseOver={counting2}>{count2}+</p>
                <p className="Section1-numbers-text text-muted">Orders Delivered</p>
            </div>
            <div>
                <p className="Section1-numbers-num"onMouseOver={counting3}>{count3}K+</p>
                <p className="Section1-numbers-text text-muted">Clients</p>
            </div>
        </div>
        </>
    )
}