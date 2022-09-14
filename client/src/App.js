import React, { useState, useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import NavBar from './Components/Navbar'
import SignIn from "./Pages/SignIn";
import LandingPage from "./Pages/LandingPage";
import PostPage from "./Pages/PostPage";


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
      <NavBar setUser={setUser} user={user} handleLogOut={handleLogOut}/>
        <Routes>
          <Route path='/' element ={ <LandingPage />} />
          <Route path='/homepage' element ={ <Homepage user={user} handleLogOut={handleLogOut}/>} />
          <Route path='/signup' element={<Signup setUser={setUser}/>}/>
          <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
          <Route path='/posts/:id' element={<PostPage/>}/>
        </Routes>
      </div>
     
  );
}

export default App;