import React from "react";
import aboutimg from '../Containers/images/section3-about-image.webp'
import appIcon1 from '../Containers/images/appStore.png'
import appIcon2 from '../Containers/images/GooglePlay.png'
import MobileImage from '../Containers/images/MobileImage.webp'
import '../Containers/Section3.css'
export default function Section3() {
    return (
        <>
            <div className="section3 container">
                <div className="section3-left mt-5">
                    <h1>About Us</h1>
                    <p>I make delicious healthy meals for busy people who want to enjoy
                        home made food without the hassle of cooking. Why would you cook
                        when you don't have to? The Hot Plate makes it easy to eat your
                        favorite home cooked food anywhere you want.
                        You deserve to eat great food, whether you're at home or on the go.
                    </p>
                    <button>See More</button>
                </div>
                <div className="section3-right mt-5">
                    <img className="img-fluid" src={aboutimg} alt=""></img>
                </div>
            </div>
            <div className="section3-mobileapp-header mt-5">
                <h1>Get our mobile app</h1>
                <p>Enjoy better experience</p>
            </div>
            <div className="section3-mobileapp-body mt-3 container">
                <div className="section3-mobileapp-left">
                    <div className="section3-mobileapp-left-para">
                        <p>With our app, you never have to settle for unhealthy, expensive takeaway food again.
                            From spicy noodles to fresh salads, we'll deliver anywhere in your city.
                            Get tasty meals in just 30 minutes. It's simple.
                            We make it easy for you to make smart business decisions fast.
                            Whether you have a busy schedule or just enjoy home-cooked food,
                        </p>
                    </div>
                    <div className="section3-mobileapp-left-appicon">
                        <img id="playstoreicon"src={appIcon1} alt=""></img>
                        <img id="googleplayIcon" src={appIcon2} alt=""></img>
                    </div>
                </div>
                <div className="section3-mobileapp-right mt-5">
                    <img className="img-fluid" src={MobileImage} alt=""></img>
                </div>
            </div>

        </>

    )
}