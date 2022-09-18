import React, { useState } from 'react'


const Preferences = ({user}) => {

    // let navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState()

    function handleUserDelete(){
        let result = window.confirm('Are you sure you want to delete your acct?')

        if (result) {
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
    }

    function updateUser(e){
        e.preventDefault()
        let result = window.confirm('Are you sure you want to update your profile?')

        if (result) {
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
    }


  return (
    <div className='userInputForm'>
        <header>Use this form to update username or password:</header>
        {errors ? <div className='errors'>Uh oh: {errors}</div> : null }
        <div className='formCointaner'>
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