import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password =form.password.value;
        console.log(email, password);
    }
    return (
        <div className="bg-[#367468] min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-[#afbebb] rounded p-8" >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 font-bold ">Email</label>
          <input
            type="email"
            name='email'
            placeholder='Email'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold">Password</label>
          <input
            type="password"
            name='password'
            placeholder='Password'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <button className="w-full py-2 px-4 bg-[#38776a] text-white rounded hover:bg-[#214a42]" type="submit">Register</button>
        <button className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-green-600 mt-5" type="submit">Google</button>
        <h1 className='mt-5 text-xl'>Already have an account <Link to='/registration' className='text-[#1e453e] font-extrabold '>Registration</Link></h1>
      </form>
    </div>
    );
};

export default Login;