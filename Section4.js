import React from "react";
import '../Containers/Section4.css'

export default function Section4() {
    return (
        <>
            <div className="section4-header">
                <h1>testimonals</h1>
                <p>This is what our client are saying</p>
            </div>
            <div className="section4-body">
                <div className="section4-card my-3">
                    <h2>Paul James</h2>
                    <h5>Lagos state</h5>
                    <p>With a Homely Eats meal,you can serve delectable,
                        home-cooked meals to your family and friends in any location,
                        anytime. anyday!
                    </p>
                </div>
                <div className="section4-card my-3">
                    <h2>Mercy jude</h2>
                    <h5>kogi state</h5>
                    <p>Be it a small gathering of friends or a large event with hundreds of people,
                         you'll always be prepared. whether you're at home or on the go.
                    </p>
                </div>
                <div className="section4-card my-3">
                    <h2>Lara one</h2>
                    <h5>Imo state</h5>
                    <p>No need to worry about any of this anymore with your app.
                         Homely Eats are made with the highest quality ingredients for you and your family.
                    </p>
                </div>
            </div>
        </>
    )
}