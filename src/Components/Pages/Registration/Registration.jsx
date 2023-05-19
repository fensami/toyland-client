import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
// import { AuthContext } from '../../../Providers/AuthProvider';

const Registration = () => {

  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgUrl = form.imgUrl.value;
        console.log(name, email, password, imgUrl);

        createUser(email, password)
        .then(result => {
          const loginUser = result.user;
          console.log(loginUser);
          navigate(from, {replace: true})
          // navigate(from, { replace: true })

        })
        .catch(error => {console.log(error)})

  }
    return (
        <div className=" min-h-screen flex items-center justify-center py-12">
      <form onSubmit={handleRegister} className="w-full max-w-sm bg-[#367468] rounded p-8" >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Registration</h2>
        <div className="mb-4">
          <label className="block mb-1 text-white font-bold">Name</label>
          <input
            type="text" name='name' placeholder='Name'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white font-bold">Email</label>
          <input
            type="email" name='email' placeholder='Email'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white font-bold">Password</label>
          <input
            type="password" name='password' placeholder='password'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white font-bold">Image URL:</label>
          <input
            type="text" name='imgUrl' placeholder='Image Url'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <button className="w-full py-2 px-4 text-white rounded hover:bg-green-600 font-bold" type="submit">Register</button>
        <h1 className='mt-5 text-white'>Already have an account <Link to='/login' className='text-white font-extrabold'>Login</Link></h1>
      </form>
    </div>
    );
};

export default Registration;