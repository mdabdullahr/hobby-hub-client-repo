import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader/Loader';

const PrivateRoutes = ({ children }) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;