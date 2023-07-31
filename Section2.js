import React from "react";
import '../Containers/Section2.css'
import foodlistIcon from '../Containers/images/food-list.svg'
import fooddeliveryIcon from '../Containers/images/food-delivery.svg'
import foodqualityIcon from '../Containers/images/food-quality.svg'
export default function Section2(){
    return(
        <>
        <div>
            <h1 className="mt-5 section2-header">Why choose us</h1>
            <p className="mt-3 section2-para">This is what makes our product different</p>
        </div>
        <div className="section2-cards container">
            <div className="section2-card">
                <div className="section2-card-content">
                    <div className="section2-card-image">
                        <img alt="" id="foodlistIcon" src={foodlistIcon} ></img>
                    </div>
                    <div className="section2-card-para">
                        <h2>Easy to Order</h2>
                        <p>Order food at a single click and 
                        select all food to order at any poin in time and at ease and comfort</p>
                    </div>
                </div>
            </div>
            <div className="section2-card">
                <div className="section2-card-content">
                    <div className="section2-card-image">
                        <img alt="" id="fooddeliveryIcon" src={fooddeliveryIcon} ></img>
                    </div>
                    <div className="section2-card-para">
                        <h2>fast delivery</h2>
                        <p>food delivery fast and reliable and 
                        get delivered at deliivery time and location any day, any time</p>
                    </div>
                </div>
            </div>
            <div className="section2-card">
                <div className="section2-card-content">
                    <div className="section2-card-image">
                        <img alt="" id="foodqualityIcon" src={foodqualityIcon} ></img>
                    </div>
                    <div className="section2-card-para">
                        <h2>100% Quality</h2>
                        <p>We provide quality food for you and your loved ones for health and so on and for wellness</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}