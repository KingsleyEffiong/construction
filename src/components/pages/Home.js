import React from "react";
import Cards from "../Cards";
import './Home.css';
import Footer from "../Footer";
import Map from "../Map";
import 'tailwindcss/tailwind.css';
import Contact from "../Contact";


function Home() {
    return ( 
        <>


       
<div className = 'white-container' >
        
<div className = "h1-container" >
        
<h1 className = "style" > Our RECENTS Projects </h1> 
</div> 
<p> Build your dream homes, and lots more😉 </p> 
<div className = 'cards-flexs' >
       
<Cards title = "Empowering Inclusivity: E&T Civil Engineering's Impactful Contribution to the Samson Siasia Sports Stadium Toilet Project"
        src = '/images/3297.jpeg'
        body = "In a laudable effort to promote inclusivity and accessibility for people living with disabilities, E&T Civil Engineering took a significant role in the construction of a specialized toilet facility at the Samson Siasia Sports Stadium in Bayelsa State, Nigeria. This project not only exemplifies the company's commitment to social responsibility but also showcases their expertise in delivering quality infrastructure solutions. In this article, we will delve into the details of E&T Civil Engineering's involvement, their supply of materials, and their role in the roofing contract, contributing to a more inclusive sporting facility."
        path = '/stadium' />
       
        
       <Cards title = "E&T Civil Engineering's Expert Scaffolding Work at MEGLAMS Hotel Construction in 2013"
        src = '/images/3434349.jpg'
        body = "In the ambitious endeavor to build the iconic MEGLAMS Hotel in Onopa, Yenagoa, Bayelsa State, Nigeria, E&T Civil Engineering played a crucial role by providing expert scaffolding services. As a pivotal component of the hotel's construction process, the scaffolding work ensured safety, efficiency, and precision throughout the project. In this article, we will explore E&T Civil Engineering's significant contribution to the successful completion of MEGLAMS Hotel in 2013."
        path = '/hotel' />
        

        
        <Cards title = "E&T Civil Engineering's Remarkable Role in the Renovation of Bayelsa State Government House"
        src = '/images/3434295.jpg'
        body = "The renovation of Bayelsa State Government House stands as a significant milestone in the pursuit of modernizing and revitalizing essential infrastructure. E&T Civil Engineering, renowned for its expertise and commitment to excellence, played a crucial role in this ambitious project. In this article, we will explore E&T Civil Engineering's remarkable contributions to the renovation of Bayelsa State Government House, enhancing its functionality and aesthetics to better serve the state and its people."
        path = '/state' />
        
        
        </div>

        
        <div className = 'cards-flexs'>
       
        <Cards title = "E&T Civil Engineering's Expertise in Boat Roofing: Enhancing Maritime Infrastructure in Warri and Port Harcourt"
        src = '/images/istockphoto-157913803-612x612.jpg'
        body = "E&T Civil Engineering's impressive track record extends beyond land-based construction projects. The company's expertise in boat roofing has made a significant impact in the maritime industry, with numerous successful projects at the Warri Boat Yard and select works at the Epenal Boat Yard in Port Harcourt, Rivers State. In this article, we will explore how E&T Civil Engineering's boat roofing projects have contributed to the enhancement of maritime infrastructure, ensuring safe and efficient operations for boat owners and operators."
        path = '/boat'/>
       

       
       <Cards title = "E&T Civil Engineering's Mini Contract: Empowering Affordable Housing at Ayama, Bayelsa State"
        src = '/images/937102.jpg'
        body = "In a bid to address the pressing need for affordable housing, E&T Civil Engineering played a pivotal role in a mini contract for the construction of low-cost houses at Ayama, Bayelsa State, around 2018. With their expertise in civil engineering and commitment to social development, the company contributed significantly to improving housing accessibility for the community. In this article, we will delve into E&T Civil Engineering's involvement in this essential project, highlighting their impact on the lives of residents in Ayama."
        path = '/construct' />
        

        
        </div> 
        <Map/>
        
        <Contact/>
        
        <Footer/>
       
        </div>

        
        </>
    )
}

export default Home;