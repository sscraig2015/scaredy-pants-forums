import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from '../logo.jpg'



const Navbar = ({user, handleLogOut}) => {
  if (user){
    return (
      
      <div className='navBar'>
          
        <Link to='/home'><img src={logo} alt='logo'/></Link>

        <div className='navBarCointainer'>
          
          <NavLink to="/myProfile">{user.username}</NavLink>
          <NavLink to="/preferences">Preferences</NavLink>
          <button className="logoutButton" onClick={handleLogOut}>Logout</button>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Navbar