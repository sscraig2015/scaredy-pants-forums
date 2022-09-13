import React, {useState} from 'react'
import  {useNavigate}  from 'react-router-dom';


const Signup = ({setUser}) => {
    
    let navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
      .then((r) => {
          if (r.ok){
            fetch("/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                password,
              }),
            })
            .then((r) => r.json())
            .then((user) => setUser(user))
            navigate("/homepage")
          }
        })
        
        
    }
  
    return (
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
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
            <label htmlFor="password_confirmation">Confirm Password:</label>
              <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            <button type="submit">Submit</button>
      </form> 
    </div>
    );
  
}

export default Signup