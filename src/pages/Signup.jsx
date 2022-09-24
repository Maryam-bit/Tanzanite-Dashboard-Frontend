import React, { useState } from "react";
import axios from 'axios';
import  { Form } from "../stories/forms/Form.jsx"
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    async function fetchData(e) {
        e.preventDefault()
        console.log("fetchData called")
        const response = await axios.post('http://localhost:5000/api/v1/users/signup', {
            username: username,
            email: email,
            password: password,
        })
        console.log(response)
        localStorage.setItem('token', response.data.token)
        navigate("/signin");
      }
    return (
        <>
            <Form onSubmit={fetchData} setPassword={setPassword} setEmail={setEmail} setUserName={setUserName} type="signup" label="Sign up" />
        </>
    )
}