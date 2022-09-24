import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Signup } from "../pages/Signup.jsx";
import { Signin } from "../pages/Signin.jsx";
import { Testing } from "../pages/testing.jsx";

export default function AppRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup/>} exact />
                <Route path="/signin" element={<Signin/>} exact />
                <Route path="/testing" element={<Testing/>} />
            </Routes>
        </Router>
    )
}