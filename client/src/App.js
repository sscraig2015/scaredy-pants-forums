import React, { useState, useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import NavBar from './Components/Navbar'
import SignIn from "./Pages/SignIn";
import LandingPage from "./Pages/LandingPage";
import PostPage from "./Pages/PostPage";
import UserProfile from "./Pages/UserProfile";


function App() {


  let navigate = useNavigate();
  const [user, setUser] = useState(null)
  console.log(user)

   useEffect(() => {

    fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
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

  if (!user) {
    return (
      <div>
         <Routes>
           <Route path='/' element ={ <LandingPage />} />
           <Route path='/signup' element={<Signup setUser={setUser}/>}/>
           <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
         </Routes>
       </div>
      
   ); 
  } else if (user) {
    return (
     <div>
      <NavBar setUser={setUser} user={user} handleLogOut={handleLogOut}/>
        <Routes>
          <Route path='/' element ={ <LandingPage />} />
          <Route path='/home' element ={ <Homepage user={user}/>} />
          <Route path='myProfile' element={<UserProfile user={user}/>}/>
          <Route path='/signup' element={<Signup setUser={setUser}/>}/>
          <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
          <Route path='/posts/:id' element={<PostPage user={user}/>}/>
        </Routes>
      </div>
     
  );
  }
    

  
}

export default App;