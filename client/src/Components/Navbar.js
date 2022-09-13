import React from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = ({user, handleLogOut}) => {





  if (user){
    return (
      <div className='navBar'>
        <NavLink to="/myProfile">{user.username}</NavLink>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Navbar