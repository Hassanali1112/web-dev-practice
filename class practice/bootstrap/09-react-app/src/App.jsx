import React, { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Category from './components/Pages/Category'
import SignUpForm from "./components/SignUpForm";
import Bike from "./components/Categories/Bike";
import Car from "./components/Categories/Car";
import Profile from "./components/Users/Profile";

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile/:userid"  element= {<Profile />}/>
          <Route path="*"  element= {'404 not found'}/>
          <Route path="category" element={<Category />} >
            <Route path="bike"  element= {<Bike />}/>
            <Route path="car"  element= {<Car />}/>
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
