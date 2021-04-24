import React from 'react'
import '../assets/css/Navbar.css'
import ImageIcon from '../assets/images/navbarIcon.png'
import addIcon from '../assets/images/addIcon.png'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

const Navbar = () => {
    return (
        <div className="navbar-container">
          
          <div className="navbar-body">
                <div className="navbar-body-user">
                    <img src={ImageIcon}/>
                    <p>Aditya Prasad</p>

                </div>
                <div className="navbar-body-menu">

                    <Button variant="outlined" color="primary">
                        <img src={addIcon}/> <span className="navbar-body-menu-text"> Add Device</span></Button>
 
                    <MoreHorizIcon/>
                 </div>
            </div>
        </div>
    )
}

export default Navbar





