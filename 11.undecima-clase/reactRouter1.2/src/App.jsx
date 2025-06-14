import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
 

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
