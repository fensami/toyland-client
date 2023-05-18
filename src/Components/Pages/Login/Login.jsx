import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-purple-600 min-h-screen flex items-center justify-center">
      <form className="w-full max-w-sm bg-purple-100 rounded p-8" >
        <h2 className="text-2xl font-bold text-purple-500 mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-purple-500" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-purple-500" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <button className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600" type="submit">Register</button>
        <h1 className='mt-5'>Already have an account <Link to='/registration' className='text-purple-500 font-extrabold'>Registration</Link></h1>
      </form>
    </div>
    );
};

export default Login;