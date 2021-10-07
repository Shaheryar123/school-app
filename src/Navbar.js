import './navbar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Menu, MenuList } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';

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
            <div className = 'navbarHeader'>
                <h3>My School</h3>
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
            </div>
            <div className ='navbarBody'>
                <div className ='navbarBodyElement'>
                    <p>Dashboard</p>
                    <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton>
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Students</p>
                <IconButton>
                    <ArrowDropDownIcon onClick ={handleDropDown} />
                    </IconButton>
                    <Menu id ='menu' onClose = {handleMenuClose} dropDown ={dropDown} open = {Boolean(dropDown)}>
                        <MenuList>All Students</MenuList>
                        <MenuList>Add new Student</MenuList>
                    </Menu>
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Teachers</p>
                <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton>
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Other Staff</p>
                <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton> 
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Account</p>
                <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton> 
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Event</p>
                <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton> 
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default Navbar
