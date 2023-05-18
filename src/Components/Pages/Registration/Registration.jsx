import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
// import { AuthContext } from '../../../Providers/AuthProvider';

const Registration = () => {

  const {createUser} = useContext(AuthContext);

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

        })
        .catch(error => {console.log(error)})

  }
    return (
        <div className="bg-purple-600 min-h-screen flex items-center justify-center py-12">
      <form onSubmit={handleRegister} className="w-full max-w-sm bg-purple-100 rounded p-8" >
        <h2 className="text-2xl font-bold text-purple-500 mb-4 text-center">Registration</h2>
        <div className="mb-4">
          <label className="block mb-1 text-purple-500">Name</label>
          <input
            type="text" name='name'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-purple-500">Email</label>
          <input
            type="email" name='email'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-purple-500">Password</label>
          <input
            type="password" name='password'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-purple-500">Image URL:</label>
          <input
            type="text" name='imgUrl'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <button className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600" type="submit">Register</button>
        <h1 className='mt-5'>Already have an account <Link to='/login' className='text-purple-500 font-extrabold'>Login</Link></h1>
      </form>
    </div>
    );
};

export default Registration;