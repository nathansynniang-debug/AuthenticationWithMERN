import {Route, Routes} from 'react-router';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {useEffect, useState, } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar"

export default function App(){
const [user, setUser] = useState(null);
const [error, setError] = useState("");

useEffect(()=>{
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (token){
      try {
        const res = await axios.get("/api/users/me", {
          headers: {Authorization: `Bearer ${token}`}
        })
        setUser(res.data);
      }
      catch(error){
        setError("Failed to fetch user data");
        localStorage.removeItem("token");
      }
    }
    

  }
}, [])

  return <><Navbar /><Routes>
    
  <Route path="/" element={<Home user={user} error={error}/>} />
  <Route path="/login" element={<Login setUser={setUser} />} />
  <Route path="/register" element={<Register setUser={setUser} />} />
</Routes>
</>;
}