import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './components/pages/Home';
import Project from "./components/pages/Project";
import Stadium from "./components/pages/Stadium";
import Hotel from "./components/pages/Hotel";
import StateHouse from "./components/pages/StateHouse";
import Contact from "./components/Contact";
import Boot from "./components/pages/Boot";
import Construct from "./components/pages/Construct";
import About from "./components/pages/About";





function App() {
    return ( 
        <>
       
       <BrowserRouter>

       
       <Navbar/>
      
       <Routes>
      
      <Route path = "/" element = {<Home/>}/> 

       <Route path = "/project" element = {<Project/>}/> 
       <Route path = "/stadium" element = {<Stadium/>}/> 
       <Route path = "/hotel" element = {<Hotel/>}/> 
       <Route path = "/state" element = {< StateHouse/>}/>
       <Route path = "/contact" element = {<Contact/>}/>
       <Route path = "/boat" element = {<Boot/>}/>
       <Route path = "/construct" element = {<Construct/>}/>
       <Route path = "/about" element = {<About/>}/>
      
      
       
       </Routes> 
       </BrowserRouter> 
    </>
  );
}

export default App;
