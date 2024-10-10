import React, { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

export default function PrivateRoutes({children}) {

    let {IsAuth} = useContext(AuthContext);
    console.log(IsAuth);

    if(!IsAuth){
        return <Navigate to='/Login'/>
    }

  return (
    <div>
      {children}
    </div>
  )
}
