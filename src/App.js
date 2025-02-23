import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import  Contact  from './Component/Contact';
import Services from './Component/Services';
import About from './Component/About';


 const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element ={<Home/>}/>
      <Route path='About' element ={<About/>}/>
      <Route path='Services' element ={<Services/>}/>
      <Route path='Contact' element ={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
      
    
  )
}
export default App