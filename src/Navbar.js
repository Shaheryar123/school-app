import './navbar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Menu, MenuList } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () =>
{
    const [dropDown, setDropDown] = useState(null)
    const handleDropDown = e =>
    {
        setDropDown(e.currentTarget)
    }
    
    const handleMenuClose = () =>
    {
        setDropDown(null)
    }
    return (
        <div className='navbar' >
            <Link to ='/'>
            <div className = 'navbarHeader'>
                <h3>My School</h3>
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
            </div>
            </Link>
            <div className ='navbarBody'>
                <div className ='navbarBodyElement'>
                    <p>Dashboard</p>
                    <IconButton>
                    <ArrowRightIcon />
                    </IconButton>
                </div>
                <hr></hr>
                <div className ='navbarBodyElement' >
                <p>Students</p>
                <IconButton>
                    <ArrowRightIcon  onClick ={handleDropDown}/>
                    </IconButton>
                    <Menu  className ='dropdown'  id ='menu' onClose = {handleMenuClose} dropDown ={dropDown} open = {Boolean(dropDown)}>
                        <Link to ='/students'>
                        <MenuList className='dropdownElement'>All Students</MenuList>
                        </Link>
                        <Link to ='/createstudent'>
                        <MenuList className ='dropdownElement'>Add new Student</MenuList>
                        </Link>
                    </Menu>
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Teachers</p>
                <IconButton>
                    <ArrowRightIcon />
                    </IconButton>
                    
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Other Staff</p>
                <IconButton>
                    <ArrowRightIcon />
                    </IconButton> 
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Account</p>
                <IconButton>
                    <ArrowRightIcon />
                    </IconButton> 
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Event</p>
                <IconButton>
                    <ArrowRightIcon />
                    </IconButton> 
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default Navbar
