import React, { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import NavBar from './Components/Navbar'


function App() {

   const [user, setUser] = useState(null)
  

   useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        };
      })
      }, []);
      
   function handleLogOut(){
         fetch('/sessions', {
           method: 'DELETE',
           headers: {
             'Content-type': 'application/json'
         }
         }).then(setUser(null))
       }

       
  return (
     <div>
      <NavBar/>
        <Routes>
          <Route path='/' element ={ <Homepage user={user} handleLogOut={handleLogOut}/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
     
  );
}

export default App;