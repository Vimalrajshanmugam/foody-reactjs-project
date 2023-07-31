import React from "react";
import { Container, } from "react-bootstrap";
import { useState } from "react";
import '../Containers/Home.css'



import { Dropdown, Form, Button, InputGroup, DropdownButton, Modal } from "react-bootstrap";
import Menu from "./Menu";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

import MyCarousel from "./MyCarousel";





export default function Home() {
    const [show, setShow] = useState(false);
    const Searchfoodsclose = () => setShow(false);
    const Searchfoods = () => setShow(true);
    
    const [seemore , setSeemore] = useState("Select Area")
    
    return (
        <>
        <div className="Home-page " >
            <div className="overlay"></div>
            <Container>
                <div className="home-content">
                    <h1 className="home-head pb-3 ">Foody</h1>
                    <h4 className="home-para pb-3">Discover the best food & drinks in Erode</h4>
                </div>
                
                <Container className="col-md-10 col-sm-12">
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-light"
                            title={seemore}
                            id="input-group-dropdown-1"
                            size="lg"
                        >
                            <Dropdown.Item href="/#" onClick={()=>setSeemore("Erode Fort")}>Erode Fort</Dropdown.Item>
                            <Dropdown.Item href="/#" onClick={()=>setSeemore("Tiruchengodu")}>Tiruchengodu</Dropdown.Item>
                            <Dropdown.Item href="/#" onClick={()=>setSeemore("Perundurai")}>Perundurai</Dropdown.Item>
                            <Dropdown.Item href="/#" onClick={()=>setSeemore("Bhavani")}>Bhavani</Dropdown.Item>
                            <Dropdown.Item href="/#" onClick={()=>setSeemore("Anthiyur")}>Anthiyur</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/#">Select Area</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control type="text" size="lg" placeholder="Search foods , Restaurant..." />
                        <Button size="lg" variant="outline-warning" className="text-light" onClick={() => Searchfoods()} >Search</Button>
                    </InputGroup>
                    <Modal show={show} onHide={Searchfoodsclose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Foody</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Sorry! We can't find your searched item</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={Searchfoodsclose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Container>
            
        </div>
        <Section1></Section1>
        <Section2></Section2>
        <MyCarousel></MyCarousel>
        <Menu></Menu>
        <Section3></Section3>
       <Section4></Section4>
       
        </>
        )
}