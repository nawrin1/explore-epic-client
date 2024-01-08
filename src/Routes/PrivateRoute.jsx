import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Watch } from 'react-loader-spinner';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
return <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center'><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default PrivateRoute;