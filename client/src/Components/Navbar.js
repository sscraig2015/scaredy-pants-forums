import React from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = ({user, handleLogOut}) => {





  if (user){
    return (
      <NavLink to="/myProfile">{user.username}</NavLink>
      
    )
  } else {
    return <div></div>
  }
}

export default Navbar