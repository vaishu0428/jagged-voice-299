import React from "react"
import { AuthContext } from "../Context/AuthContext";
import { Form, Link, useNavigate } from "react-router-dom";
function Login()
{
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const {loginUser,authState}=React.useContext(AuthContext)
    const navigate= useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.token)
            {
                loginUser(res.token)
                navigate("/")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <h2>Form</h2>
            <Form onSubmit={handleSubmit}>
               <input  value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
               <input  value={password}
               onChange={(e)=>setPassword(e.target.value)}/>
               <button>SUBMIT</button>
            </Form>
        </div>
    )
}
export default Login;