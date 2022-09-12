import React from 'react'
import SignIn from './SignIn'

const Homepage = ({user, handleLogOut}) => {
  
console.log(user)
if (user) {
  return (
            <div>
                {user.username}
            </div>
       
        )  
} else {
    return <SignIn />
}

}
export default Homepage