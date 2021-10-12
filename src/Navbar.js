import './navbar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton,} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';
const Navbar = () =>
{
    
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
                <div className ='dropdown'>
                    <IconButton>
                    <ArrowRightIcon className ="dropbtn"/>
                    </IconButton>
                        <div className="dropdown-content">
                        <Link to ='/students'>
                            <p>All Student</p>
                            </Link>
                            <Link to ='/createstudent'>
                            <p >Create New Student</p>
                        </Link>
                        </div>
                        </div>                       
                </div>
                <hr></hr>
                <div className ='navbarBodyElement'>
                <p>Teachers</p>
                <div className ='dropdown'>
                    <IconButton>
                    <ArrowRightIcon className ="dropbtn"/>
                    </IconButton>
                        <div className="dropdown-content">
                        <Link to ='/teachers'>
                        <p >All Teachers</p>
                            </Link>
                            <Link to ='/createteacher'>
                            <p>Create New Teacher</p>
                            </Link>
                        </div>
                        </div>
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
