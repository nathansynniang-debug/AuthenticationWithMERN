import React from 'react';
import {Link} from 'react-router';
const Home = ({user, error}) => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center p-4">
        {error && <p className="text-red-500 mb-4 text-sm">error</p>}
        {user ? (
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Welcome, {user.username}
                </h2>
                <p className="text-gray-600">Email: {user.email}</p>
                </div>
        )
        :
      (<div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Welcome
                </h2>
                <p className="text-gray-600">Please login or register</p>
                <div>
                    <Link to="/login">Login</Link><br />
                    <Link to="/register">Register</Link>
                </div>
                </div>)}
            </div>
        </div>
  );
};

export default Home;