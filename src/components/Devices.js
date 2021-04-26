import React from 'react'
import mobileImage from '../assets/images/mobile.png'
import laptopImage from '../assets/images/laptop.png'
import '../assets/css/Devices.css'


const Devices = ({mobile,laptop}) => {

let mobile_Hour= Math.floor(mobile/60)
    let mobile_minutes=mobile % 60
    let laptop_Hour= Math.floor(laptop/60)
    let laptop_minutes=laptop % 60

    return (
        <div className="devices-container">


            <div className="devices-container-mobile">
                <img src={mobileImage} /> 
                <div className="devices-container-mobile-text"> 
                <span  >Adi's Phone</span>  
                <div>
                    {mobile_Hour>0?mobile_Hour+"h  " :""}{mobile_minutes+ "m"}
                    </div>
                </div>
              
            </div>
           
            <div className="devices-container-laptop">
            <img src={laptopImage} />
            <div className="devices-container-laptop-text">
                 <span >Adi's laptop</span>  
                 <div>
                     {laptop_Hour>0?laptop_Hour+"h  ":""}{laptop_minutes+ "m"}
                     </div>
                 </div>
              
            </div>

            <div className="device-container-bottom-text"><div>See All Devices</div></div>
        </div>
    )
}

export default Devices
