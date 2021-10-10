import './navbar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Menu, MenuList } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () =>
{
    const [dropDownStudent, setDropDownStudent] = useState(null)
    const [dropDownTeacher, setDropDownTeacher] = useState(null)
    const handleDropDown = e =>
    {
        setDropDownStudent(e.currentTarget)
    }
    const handleDropDownTeacher = e =>
    {
        setDropDownTeacher(e.currentTarget)
    }
    
    const handleMenuClose = () =>
    {
        setDropDownStudent(null)
    }
    const handleMenuCloseTeacher = () =>
    {
        setDropDownTeacher(null)
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
                    <ArrowRightIcon  onMouseOver ={handleDropDown} disableRipple />
                    </IconButton>
                    <Menu  className ='dropdown'  id ='menu' onClick = {handleMenuClose} dropDown ={dropDownStudent} open = {Boolean(dropDownStudent)}>
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
                    <ArrowRightIcon onMouseOver ={handleDropDownTeacher} disableRipple/>
                    </IconButton>
                    <Menu  className ='dropdown'  id ='menu' onClick = {handleMenuCloseTeacher} dropDown ={dropDownTeacher} open = {Boolean(dropDownTeacher)}>
                        <Link to ='/teachers'>
                        <MenuList className='dropdownElement'>All Teacher</MenuList>
                        </Link>
                        <Link to ='/createteacher'>
                        <MenuList className ='dropdownElement'>Add new Teacher</MenuList>
                        </Link>
                    </Menu>
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
