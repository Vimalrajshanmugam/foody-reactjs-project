import React, {  useState , useEffect} from "react";
import axios from 'axios'
import {API_URL} from './URL'
import './Form.css'
import userIcon from './images/user-icon.png'
import mailIcon from './images/mail-icon.png'
import passwordIcon from './images/password-icon.png'
import passwordrepeatIcon from './images/passwordrepeat-icon.png'



import {  Link, NavLink, useNavigate } from "react-router-dom";




function SignUp(){

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [Repeatpassword , setRepeatpassword] = useState("")

    var checkbox = document.getElementById("checkbox")
    
    
    var nameRegx = /([a-zA-z]{3,10})/
    var mailRegx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{3,10})+\.+([a-zA-Z]{2,10})/
    var passwordRegx = /([a-zA-Z-0-9]{6})/

    const [apidata, setapidata] = useState([])
    const CallApi = async () => {
        const resp = await axios.get(API_URL)
        setapidata(resp.data)
    }
    useEffect(() => {
        CallApi()
    }, [])


    
    const Navigate = useNavigate()

    const mychanges=(e)=>{
        setName(e.target.value)
        
    }

  
    const postData=async()=>{
        apidata.map((e)=>{
            if(e.mail === mail){
               return alert("Email already exist")
            }
        })
        if( name === "" && password === ""){
           return alert("please fill the input fields")
        }
        else if( !nameRegx.test(name)){
            return alert("name should be more than 3 letters")
        }
        else if(!mailRegx.test(mail)){
            return  alert("Invalid Email")
        }
        else if(!passwordRegx.test(password)){
            return alert("password should be 6 characters")
        }
        else if(Repeatpassword !== password){
            return alert("Repeat password dosn't match")
        }
        else if(!checkbox.checked){
            return alert("please agree terms & conditions")
        }
        else{
            await axios.post(API_URL, {
            name,
            mail,
            password,
            Repeatpassword
        })
       Navigate("/Login")}
    }

    return(
        <div className="Form-page">
        <div className="Form-container">
            <div className="Form-signUp">
                <h2>Sign Up</h2>
                <div className="form">
                    <div className="form-group">
                        <label><img src={userIcon} alt=""></img></label>
                        <input type="text"
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) =>mychanges(e)} ></input>
                           
                    </div>
                    
                    <div className="form-group">
                        <label><i><img src={mailIcon} alt=""></img></i></label>
                        <input type="mail" 
                        id="mail"
                         placeholder="Your email"
                         value={mail}
                         onChange={(e)=>setMail(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label><i><img src={passwordIcon} alt=""></img></i></label>
                        <input type="password"
                         className="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label><i><img src={passwordrepeatIcon} alt=""></img></i></label>
                        <input type="password" 
                        className="password"
                         placeholder=" Repeat Password"
                         value={Repeatpassword}
                         onChange={(e)=>setRepeatpassword(e.target.value)}
                         ></input>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" value={"check"} id="checkbox"></input>
                        <label>
                            <span>i agree all statements in <a href="#/">Terms and conditions</a></span>
                        </label>
                    </div>
                    <div className="form-group form-button">
                        <button  onClick={() => postData()}>Register</button>
                    </div>
                    <NavLink as={Link} to={"/Login"}>Already a member</NavLink>
                </div>
            </div>
            {/* <div className="Form-image">
                <div className="signUp-image">
                    <img src={SignUpImage} alt=""></img>
                    
                </div>
            </div> */}
        </div>
    </div>
    )
}
export default SignUp