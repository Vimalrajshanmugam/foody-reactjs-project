import React, { Component } from "react";
import '../Containers/Menu.css'

import Catagries from "./Catagries";
export default class Fooditems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({
            data: Catagries
        })
    }
    render() {
        return (
            <>
                <div className=" carousel slide" data-bs-ride="carousel" >
                    <div className=" carousel-inner">
                        {Catagries.map((e) => {
                            const { id, item, Desc, price, image } = e
                            return <div key={id} className="  carousel-item ">
                                <img src={image} className="d-block w-100" alt=""></img>
                            </div>
                        })}
                    </div>
                </div>

            </ >
        )
    }

}
