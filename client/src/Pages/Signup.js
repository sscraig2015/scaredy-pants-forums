import React, {useState} from 'react'
import  {useNavigate, NavLink}  from 'react-router-dom';


const Signup = ({setUser}) => {
    
    let navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState();

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
              })
            })
            .then((r) => {
                if(r.ok) {
                  r.json().then((data) => setUser(data))
                  navigate("/home")
                }
            })
          } else {
              r.json().then((r) => setErrors(r))
          }})   
    }

    return (
      <div className="userInputForm">
    
        <div className='formContainer'>
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
          {errors ? <div>{errors.error}</div> : null }
          <NavLink to='/signin'>Go back..</NavLink>
        </div> 
    </div>
    );
  
}

export default Signup