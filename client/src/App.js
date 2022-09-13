import React, { useState, useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import NavBar from './Components/Navbar'
import SignIn from "./Pages/SignIn";
import LandingPage from "./Pages/LandingPage";


function App() {


  let navigate = useNavigate();
  const [user, setUser] = useState(null)


   useEffect(() => {

    fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate("/homepage")
        } else {
          navigate("/signin")
        };
      })
      }, []);

      function handleLogOut(){
        fetch('/sessions', {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
        }
        })
        navigate("/signin")
        setUser(null)
      }
    


       
  return (
     <div>
      <NavBar setUser={setUser} user={user}/>
        <Routes>
          <Route path='/' element ={ <LandingPage />} />
          <Route path='/homepage' element ={ <Homepage user={user} handleLogOut={handleLogOut}/>} />
          <Route path='/signup' element={<Signup setUser={setUser}/>}/>
          <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
        </Routes>
      </div>
     
  );
}

export default App;