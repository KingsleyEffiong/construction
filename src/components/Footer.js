import React from 'react'
import { Typography} from "@material-tailwind/react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaMailBulk
} from 'react-icons/fa'
import './Footer.css'

function Footer() {

    return (
        <div className = 'container-2' >
        
        <footer className = "flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-blue-gray-50 py-6 text-center md:justify-around" >

        <Typography color = "white"
        className = "font-normal" >
        
        &copy; E & T Civil Engineering Inc. 
        </Typography> 
        <ul className = "flex flex-wrap items-center gap-y-2 gap-x-8" >
        
        <li>
        
        <Typography as = "a"
        href = "# "
        color = "white"
        className = "font-normal transition-colors hover:text-blue-500 focus:text-blue-500" >
        
        <FaMailBulk / >
       
        </Typography> 
        </li> 
        <li>
        
        <Typography as = "a"
        href = "mailto:Support@etcivilcon.com"
        color = "white"
        className = "font-normal transition-colors hover:text-blue-500 focus:text-blue-500" >
        
        <FaInstagram/>
       
        </Typography> 
        </li> 
        <li>
       
        <Typography as = "a"
        href = "https://twitter.com/ETCivilCon23860"
        color = "white"
        className = "font-normal transition-colors hover:text-blue-500 focus:text-blue-500" >
        
        <FaTwitter/>
        
        </Typography>
        </li> 
        <li>
       
        <Typography as = "a"
        href = "https://www.facebook.com/profile.php?id=61550265694888&mibextid=D4KYlr"
        color = "white"
        className = "font-normal transition-colors hover:text-blue-500 focus:text-blue-500" >
       
       <FaFacebook/>
       
       </Typography> 
       </li> 
       </ul> 
       </footer> 
       </div>
    );
}



export default Footer