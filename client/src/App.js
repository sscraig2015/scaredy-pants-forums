import React, { useState, useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import NavBar from './Components/Navbar'
import SignIn from "./Pages/SignIn";
import PostPage from "./Pages/PostPage";
import UserProfile from "./Pages/UserProfile";
import Preferences from "./Pages/Preferences";


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
      <div className="appMain">
         <Routes>
           <Route path='*' element ={ <SignIn setUser={setUser}/>} />
           <Route path='/signup' element={<Signup setUser={setUser}/>}/>
           <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
         </Routes>
       </div>
      
   ); 
  } else if (user) {
    return (
     <div className="appMain">
      <NavBar setUser={setUser} user={user} handleLogOut={handleLogOut}/>
        <Routes>
          <Route path='/home' element ={ <Homepage user={user} setUser={setUser}/>} />
          <Route path='/myProfile' element={<UserProfile user={user}/>}/>
          <Route path='/preferences' element={<Preferences user={user}/>}/>
          <Route path='/signup' element={<Signup setUser={setUser}/>}/>
          <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
          <Route path='/posts/:id' element={<PostPage user={user}/>}/>
        </Routes>
      </div>
     
  );
  }
    

  
}

export default App;