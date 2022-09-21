import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { Signup } from "../pages/Signup.jsx";
import { Testing } from "../pages/testing.jsx";

export default function AppRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup/>} exact />
                <Route path="/testing" element={<Testing/>} />
            </Routes>
        </Router>
    )
}