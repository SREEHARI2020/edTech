import React,{useState} from 'react'
import '../assets/css/Navbar.css'
import ImageIcon from '../assets/images/navbarIcon.png'
import addIcon from '../assets/images/addIcon.png'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = () => {
    const [anchorEl, setAnchorEl]=useState(null)

    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null)
    }
    return (
        <div className="navbar-container">
          
          <div className="navbar-body">
                <div className="navbar-body-user">
                    <img src={ImageIcon}/>
                    <p>Aditya Prasad</p>

                </div>
                <div className="navbar-body-menu">

                    <Button className="navbar-body-menu-button"  variant="outlined" color="primary">
                        <img src={addIcon}/> <span className="navbar-body-menu-text"> Add Device</span></Button>
 
                  


                  
                    <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>handleClick(e)}/>

<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem className="navbar-body-menu-add-device" onClick={handleClose}>Add Device</MenuItem>
  <MenuItem onClick={handleClose}>Edit details</MenuItem>
  <MenuItem onClick={handleClose}>Delete Child</MenuItem>
</Menu>


                 </div>
            </div>
        </div>
    )
}

export default Navbar





