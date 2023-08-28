import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom'
// import {loremIpsum} from 'react-lorem-ipsum';
// import {Button} from "@material-tailwind/react";


function Cards(props) {
    return (



       
        <div className = 'card-container'>
      
      <Link to = { props.path}>
       
      <div className = 'image-container'>
        
      <img src = {props.src} alt = 'picturess' / >
       
      </div> 
      <h1 className = 'cards-h1' > {props.title} </h1>

     
      <div className = 'lorem' > {props.body} </div>

       
      <button class = "bg-green-500 text-white font-bold  m-6 py-1 px-1 rounded" > Click to Know more </button> 
      </Link>

       
      </div>

    )
}

export default Cards;