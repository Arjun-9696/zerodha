import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import People from '../../Pages/People';
import Pricing from '../../Pages/Pricing';
import Tutorial from '../../Pages/Tutorial';
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/tutorial" element={<Tutorial/>}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>
  )
}

export default AllRoutes