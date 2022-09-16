import React from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = ({user, handleLogOut}) => {
  if (user){
    return (
      <div className='navBar'>
        <NavLink to="/homePage">Home</NavLink>
        <NavLink to="/myProfile">{user.username}</NavLink>
        
        <button className="logoutButton" onClick={handleLogOut}>Logout</button>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Navbar