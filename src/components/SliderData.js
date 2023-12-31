import React, {useEffect,useState} from 'react';

const SliderData = () => {
    const imageUrls = [
        '/images/3434295.jpg',
        '/images/3434349.jpg',
        '/images/937102.jpg',
        // Add more image URLs as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the current index, reset to 0 if it exceeds the imageUrls length
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [imageUrls.length]);

    return ( 
        <div>
       
       <div className = 'slider'>
        
       <img src = {imageUrls[currentIndex]}alt = "carousel" className = {
            `carousel-image ${currentIndex !== 0 ? 'hide' : ''}`
        }
        /> 
        </div> 
        </div>
    );
};


export default SliderData;