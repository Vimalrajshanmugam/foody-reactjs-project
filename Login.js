import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form, NavLink,Modal } from "react-bootstrap";
import {
    Link, useNavigate,

} from 'react-router-dom'
import { API_URL } from "./URL";

export default function Login() {
    const [apidata, setapidata] = useState([])
    const [Name , setName] = useState("")
    const [password , setPassword] = useState("")
    let valid = document.getElementById("valid")

    const [show, setShow] = useState(false);
    const ForgetpasswordClose = () => setShow(false);
    const Forgetpassword = () => setShow(true);

    const Navigate = useNavigate()

    const CallApi=async()=>{
        const resp = await axios.get(API_URL)
        setapidata(resp.data)
    }
    useEffect(()=>{
        CallApi()
    },[])
    const Login=()=>{
        if(Name === "" && password === "" ){
            return valid.innerHTML = "please Enter Name & Password"
         }else
        apidata.map((e)=>{
            if(e.name !== Name && e.password !== password){
                return valid.innerHTML = "Invalid Name & Password"
            }
            else if(e.name === Name && e.password === password){
                return Navigate("/Home")
            }
        })
    }
    return (
        <div>
            <Container>
                <Row className="my-5 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={5} xs={12}>
                        <div className="border border-3 border-warning"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Log In</h2>
                                    <p className=" mb-5 ">Please enter your login and password!</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label className="">
                                                    User Name
                                                </Form.Label>
                                                <Form.Control
                                                 type="text"
                                                 value={Name}
                                                 onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                 type="password"
                                                 value={password}
                                                 onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                                <p className="small">
                                                    <a className="text-primary" onClick={() => Forgetpassword()} href="#!">
                                                        Forgot password?
                                                    </a>
                                                </p>
                                                <Modal show={show} onHide={ForgetpasswordClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Forget password?</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        Enter your mobile Number
                                                        <Form.Control type="text"></Form.Control>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="dark" onClick={ForgetpasswordClose}>
                                                            send OTP
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                <div id="valid" style={{color:"red",fontWeight:"bold"}}></div>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="dark" onClick={()=>Login()}>
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?
                                                <span className="text-decoration-underline text-primary"><NavLink as={Link} to={'/SignUp'}>Sign Up</NavLink></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

