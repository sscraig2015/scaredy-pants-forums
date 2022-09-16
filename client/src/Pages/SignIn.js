import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const SignIn = ({setUser}) => {
      
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault();
    
    
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then((r) => {
        if(r.ok) {
          r.json().then((data) => setUser(data))
          navigate("/home")
        }
      })
  }
    
    

  
    return (
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          
            <label autofocus htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
            <NavLink to='/signup'>Create account?</NavLink>
        </form>
      </div>
  
    );
}

export default SignIn