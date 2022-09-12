import React from 'react'

const Navbar = () => {

  function handleLogOut(){
    fetch('/sessions', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }
    })
  }


  return (
    <button onClick={handleLogOut}>Logout?</button>
  )
}

export default Navbar