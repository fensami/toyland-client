import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    console.log(user);
    // const location = useLocation();
    // const location = useLocation();
    
    if(loading){
        return <p>loading...</p>
    }
    if(user){
        return children
    }
    return <Navigate  to='/login' replace></Navigate>
};

export default PrivateRoute;