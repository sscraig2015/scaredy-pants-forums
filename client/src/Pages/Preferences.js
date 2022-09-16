import React, { useState } from 'react'

const Preferences = ({user}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handleUserDelete(){
        fetch(`/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((r) => {
            if(r.ok) {
                fetch('/sessions', {
                    method: 'DELETE',
                    headers: {
                      'Content-type': 'application/json'
                      }
                  })
            }
        })
        
    }

    function updateUser(e){
        e.preventDefault()

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                username,
                password,
                password_confirmation: password,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        window.location.reload(true)
    }

  return (
    <div className='prefContainer'>
        <div>Use this form to update username or password:</div>
        <div className='userUpdateForm'>
            <form onSubmit={updateUser}>
                <label>Username:</label>
                <input type='text' name='username' onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password:</label>
                <input type='text' name='password' onChange={(e) => setPassword(e.target.value)}></input>
                <input type='submit'/>
            </form>
            
        </div>
        <button onClick={handleUserDelete}>Delete Account? {`(this is permanent)`}</button>
    </div>
  )
}

export default Preferences