import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useTitle from '../../../Hooks/useTitles';

const Login = () => {
    const {signIn, googleLogin} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    useTitle('login')
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password =form.password.value;

        signIn(email, password)
        .then(result => {
            const logUser = result.user;
            console.log(logUser);
            navigate(from)
        })
        .catch(error => {
          console.log(error);
        })
    }

    const googleLoged = () => {
      googleLogin()
      .then(result => {
        const logedUser = result.user
        console.log(logedUser);
        navigate(from)
      })
      .catch(error => {console.log(error);})
    }
    return (
        <div className=" min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-[#367468] rounded-xl p-8" >
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-white">Email</label>
          <input
            type="email"
            name='email'
            placeholder='Email'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-white">Password</label>
          <input
            type="password"
            name='password'
            placeholder='Password'
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500" required
          />
        </div>
        <button className="w-full py-2 px-4 text-white rounded hover:bg-green-600 font-bold" type="submit">Login</button>

        <button onClick={googleLoged} className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-green-600 mt-5 font-bold" type="submit">Google</button> 

        <h1 className='mt-5 text-white'>New user? <Link to='/registration' className='text-white  font-bold '>Registration</Link></h1>
      </form>
    </div>
    );
};

export default Login;