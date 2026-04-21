import { Navigate, Route, Routes } from 'react-router'; // Strictly react-router
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound"
export default function App() {

  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/api/users/me", {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(res.data);
        } catch (error) {
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);
      
    };
    fetchUser();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-white">Loading...</div>
      </div>
    ) 
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} error={error} />} />
        <Route path="/login" element={user? <Navigate to="/" /> : <Login setUser={setUser} />} />
        <Route path="/register" element={user? <Navigate to="/" /> : <Register setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}