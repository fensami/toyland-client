import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logomain from '../../../assets/logomain1.png'
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBeer, FaHome } from 'react-icons/fa';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => { console.log(error) })
  }
  return (
    <div className="navbar bg-[#38776a] text-white	">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allToys'>All Toys</Link></li>
            {
              user && <>
                
                  <li><a>My Toys</a></li>
                  <li><Link to='/addToys'>Add A Toys</Link></li>
               
              </>
            }
            <li><a>Blogs</a></li>
          </ul>
        </div>
        <img className='w-28' src={logomain} alt="" />
        {/* <a className="btn btn-ghost normal-case text-4xl font-bold">ToyLand</a> */}
        <div>
          <p className="btn btn-ghost normal-case text-4xl font-bold">ToyLand</p>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="font-bold text-xl menu menu-horizontal px-1">
          <li><Link to='/'><FaHome /> Home</Link></li>
          <li><Link to='/allToys'> All Toys</Link></li>

          {
            user && <>
              
                <li><a>My Toys</a></li>
                <li><Link to='/addToys'>Add A Toys</Link></li>
              
            </>
          }
          <li><Link to='/blogs'>Blogs</Link></li>
        </ul>
      </div>
      {/* <Link to='/login'>
  <button className="w-full py-2 px-4 text-white rounded hover:bg-[#0a2d26]" type="submit">Login</button>  
  </Link> */}
      <div>
        {
          user ?
            <Link><button className="w-full py-2 px-4 text-white rounded hover:bg-[#0a2d26]" onClick={handleLogout} type="submit">LogOut</button></Link> :
            <Link to='/login'><button className="w-full py-2 px-4 text-white rounded hover:bg-[#0a2d26]" type="submit">Login</button>
            </Link>
        }
        <div>
          {
            user && <img className='w-12 rounded-full' src={user.photoURL} alt="" />
          }
        </div>
      </div>


    </div>
  );
};

export default Navbar;