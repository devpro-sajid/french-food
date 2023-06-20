import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Utils/Loading';

const PrivateRoute = ({children}) => {
    const { user,loader } = useContext(AuthContext);
    const location=useLocation();
    if(loader){
        return <Loading></Loading>
    }
    else if (user) {
        return children;
     }
     return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;