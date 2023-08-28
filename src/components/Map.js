import React from 'react'
import './Map.css'

function Map() {
    return ( 
        <>
        
        <div className = 'container-yellow '>
        
        <p className = 'inline-block' > Address: N0 21 Harbour Road, Yenagoa, Bayelsa state. < br / >
        Phone: +2348086678498, +2348064468042 < br/>
        Email: Support @etcivilcon.com < br/>< br/>
        Branch Office: 192 Bonny Street Port Harcourt< br/>
        Phone: +2348123379693
        
        </p> 
        
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=21%20harbour%20road,%20yenagoa,%20bayelsa%20state+(E&amp;T%20Civil%20Engineering)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
        </div>
        </>
    )
}

export default Map