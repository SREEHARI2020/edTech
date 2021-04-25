import React from 'react'
import mobile from '../assets/images/mobile.png'
import laptop from '../assets/images/laptop.png'
import '../assets/css/Devices.css'


const Devices = () => {
    return (
        <div className="devices-container">


            <div className="devices-container-mobile">
                <img src={mobile} /> 
                <div className="devices-container-mobile-text"> 
                <span  >Adi's Phone</span>  
                <div>40 min</div>
                </div>
              
            </div>
           
            <div className="devices-container-laptop">
            <img src={laptop} />
            <div className="devices-container-laptop-text">
                 <span >Adi's laptop</span>  
                 <div>40 min</div>
                 </div>
              
            </div>

            <div className="device-container-bottom-text"><div>See All Devices</div></div>
        </div>
    )
}

export default Devices
