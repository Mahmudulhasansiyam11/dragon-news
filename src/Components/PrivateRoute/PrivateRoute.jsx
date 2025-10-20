import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({children}) => {
    const { loading , user } = use(AuthContext);
    // console.log(user)
    // console.log(loading)

    const location = useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    
};

export default PrivateRoute;