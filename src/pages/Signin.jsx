import React, { useState } from "react";
import axios from 'axios';
import  { Form } from "../stories/forms/Form.jsx"

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function fetchData(e) {
        e.preventDefault()
        console.log("fetchData called")
        const token = localStorage.getItem('token')
        await axios.post('http://localhost:5000/api/v1/users/signin', {
            email: email,
            password: password,
        }, {
            headers: {
                'Authorization': token
            }
        })
      }
    return (
        <>
            <Form onSubmit={fetchData} setPassword={setPassword} setEmail={setEmail} type="signin" label="Sign in" />
        </>
    )
}