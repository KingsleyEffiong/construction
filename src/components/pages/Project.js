import React from 'react'
import './Project.css'
import 'tailwindcss/tailwind.css';
import Footer from '../Footer';
import './Stadium.css'


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import {
    Link
} from 'react-router-dom';


function Project() {
    return ( 
        <>
      
      <div className = ' grid mt-16'>
        
      <div className = 'flex flex-col xl:flex-row justify-center items-center m-0 p-2 ' >

        <Card className = "w-96 m-3">
             <CardHeader floated = {
            false
        }
        className = "h-69" >
        
        <img src = '/images/3434349.jpg'
        alt = "profile-picture"/>
        
        </CardHeader> 
        <CardBody className = "text-center" >
       
        <Typography variant = "h4" color = "blue-gray" className = "mb-2">
        E & T Civil Engineering 's Expert Scaffolding Work at MEGLAMS Hotel Construction in 2013 
        </Typography> 
        <Typography color = "blue" className = "font-medium text-black text-justify"
        textGradient>
       
       <p id = 'small' >
        In the ambitious endeavor to build the iconic MEGLAMS Hotel in Onopa, Yenagoa, Bayelsa State, Nigeria, E & T Civil Engineering played a crucial role by providing expert scaffolding services.As a pivotal component of the hotel 's construction process, the scaffolding work ensured safety, efficiency, and precision throughout the project. In this article, we will explore E&T Civil Engineering'
        s significant contribution to the successful completion of MEGLAMS Hotel in 2013. 
        </p>
        <div className = "flex w-max items-end gap-4" >
       
        </div> 
        </Typography> 
        <Link to = '/hotel'>
        
        <button class = "bg-green-500  text-white font-bold py-1 px-1 rounded" > Read More </button> 
        </Link> 
        </CardBody> 
        </Card> 

        <Card className = "w-96 m-3" >
       
        <CardHeader floated = {
            false
        }
        className = "h-69" >
        
        <img src = '/images/3297.jpeg'
        alt = "profile-picture"/>
        
        </CardHeader> 
        <CardBody className = "text-center" >
       
        <Typography variant = "h4"
        color = "blue-gray"
        className = "mb-2" >
        Empowering Inclusivity: E & T Civil Engineering 's Impactful Contribution to the Samson Siasia Sports Stadium Toilet Project 
        </Typography> 
        <Typography color = "blue"
        className = "font-medium text-black text-justify"
        textGradient >
        
        <p id = 'small'>
        In a laudable effort to promote inclusivity and accessibility
        for people living with disabilities, E & T Civil Engineering took a significant role in the construction of a specialized toilet facility at the Samson Siasia Sports Stadium in Bayelsa State, Nigeria.This project not only exemplifies the company 's commitment to social responsibility but also showcases their expertise in delivering quality infrastructure solutions.  
        </p> 
        <div className = "flex w-max items-end gap-4" >
        
        </div> 
        </Typography> 
        <Link to = '/stadium' >
       
        <button class = "bg-green-500  text-white font-bold py-1 px-1 rounded" > Read More </button> 
        </Link> 
        </CardBody> 
        </Card> 
        </div> 
        <div className = 'flex flex-col xl:flex-row justify-center items-center m-0 p-2 '>

        
        <Card className = "w-96 m-3" >
       
        <CardHeader floated = {
            false
        }
        className = "h-69" >
       
       <img src = '/images/3434295.jpg'
        alt = "profile-picture"/>
        
        </CardHeader> 
        <CardBody className = "text-center" >
       
        <Typography variant = "h4"
        color = "blue-gray"
        className = "mb-2" >
        E & T Civil Engineering 's Remarkable Role in the Renovation of Bayelsa State Government House 
        </Typography> 
        <Typography color = "blue"
        className = "font-medium text-black text-justify"
        textGradient >
        
        <p id = 'small' >
        The renovation of Bayelsa State Government House stands as a significant milestone in the pursuit of modernizing and revitalizing essential infrastructure.E & T Civil Engineering, renowned
        for its expertise and commitment to excellence, played a crucial role in this ambitious project.In this article, we will explore E & T Civil Engineering 's remarkable contributions to the renovation of Bayelsa State Government House, enhancing its functionality and aesthetics to better serve the state and its people. 
        </p> 
        <div className = "flex w-max items-end gap-4" >
       
        </div> 
        </Typography> 
        <Link to = '/state' >
       
        <button class = "bg-green-500  text-white font-bold py-1 px-1 rounded" > Read More </button> 
        </Link> 
        </CardBody>
        </Card> 
        <Card className = "w-96 m-3">
        
        <CardHeader floated = {
            false
        }
        className = "h-69" >
        
        <img src = '/images/istockphoto-157913803-612x612.jpg'
        alt = "profile-picture"/>
        
        </CardHeader> 
        <CardBody className = "text-center" >
        
        <Typography variant = "h4"
        color = "blue-gray"
        className = "mb-2" >
        E & T Civil Engineering 's Expertise in Boat Roofing: Enhancing Maritime Infrastructure in Warri and Port Harcourt 
        </Typography> 
        <Typography color = "blue"
        className = "font-medium text-black text-justify"
        textGradient >
       
       <p id = 'small'>
        E & T Civil Engineering 's impressive track record extends beyond land-based construction projects. The company'
        s expertise in boat roofing has made a significant impact in the maritime industry, with numerous successful projects at the Warri Boat Yard and select works at the Epenal Boat Yard in Port Harcourt, Rivers State.In this article, we will explore how E & T Civil Engineering 's boat roofing projects have contributed to the enhancement of maritime infrastructure, ensuring safe and efficient operations for boat owners and operators. 
        </p> 
        <div className = "flex w-max items-end gap-4">
        
        </div> 
        </Typography> 
        <Link to = '/boat'>
        
        <button class = "bg-green-500  text-white font-bold py-1 px-1 rounded" > Read More </button> 
        </Link> 
        </CardBody> 
        </Card> 
        </div>

        
        </div>

       
        <Footer/>
       
        </>
    );
}
export default Project