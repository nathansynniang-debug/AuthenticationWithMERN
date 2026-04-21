import React from 'react';
import {Link, useNavigate } from 'react-router';


const Navbar = ({user, setUser}) => {
  const navigate = useNavigate();
const handleLogout = () =>{
  localStorage.removeItem("token");
  setUser(null);
  navigate("/")
}

  return (
  <nav className="bg-gray-800 p-4 text-white">
  <div className="container mx-auto flex justify-between items-center"> {/* Added flex */}
    <Link to="/" className="text-lg font-bold">
      MERN Auth
    </Link>
    <div>
      {/* {console.log("Current User State:", user)}
{user ? (
  <span>Logged in as: {user.username || "refresh to see your logged in username"}</span>
) : (
  <span>Not Logged In</span>
)} */}
      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.username && `${user.username} is your username`}</span>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link className="hover:underline" to="/login">Login</Link>
          <Link className="hover:underline" to="/register">Register</Link>
        </div>
      )}
    </div>
  </div>
</nav>
  );
};

export default Navbar;