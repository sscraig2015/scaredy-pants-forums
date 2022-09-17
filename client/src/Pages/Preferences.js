import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Preferences = ({user}) => {

    let navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState()

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
        window.location.reload(true)
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
        .then((r) => {
            if(r.ok) {
                window.location.reload(true)
            } else {

                r.json().then((error) => setErrors(error.error))
            }
        })
    }

  return (
    <div className='prefContainer'>
        <div>Use this form to update username or password:</div>
        {errors ? <div>{errors}</div> : null }
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