import './Header.css'
import { IconButton, Avatar } from '@material-ui/core';
import { NotificationImportantOutlined } from '@material-ui/icons';
import { MessageOutlined } from '@material-ui/icons';
import {SearchOutlined} from '@material-ui/icons';

const Header = () =>
{
    return (
        <div className='header'>
            <h3>Welcome to My School App</h3>
                <p>A Complete Virtual School</p>
                
            <input type='text' placeholder='Search'></input>
            <IconButton>
                <SearchOutlined />
               </IconButton>
            
            <p>Welcome <strong>Mr Ahmed</strong></p>
            <IconButton>
            <NotificationImportantOutlined />
            </IconButton>
            <IconButton>
            <MessageOutlined/>
            </IconButton>
            <Avatar />

        </div>
    )
}

export default Header
