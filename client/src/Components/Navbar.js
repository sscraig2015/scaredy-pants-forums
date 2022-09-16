import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from '/home/sscraig/Development/Mod4/world-time/world-time-mvp/world-time-mvp/client/src/Resources/birthday_dog.webp'



const Navbar = ({user, handleLogOut}) => {
  if (user){
    return (
      
      <div className='navBar'>
          
          <img src={logo} alt='logo'></img>

        <div className='navBarCointainer'>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/myProfile">{user.username}</NavLink>
          <NavLink to="/home">Account Settings</NavLink>
          <button className="logoutButton" onClick={handleLogOut}>Logout</button>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Navbar