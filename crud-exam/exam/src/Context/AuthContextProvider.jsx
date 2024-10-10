import React from 'react';
import {createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({childern}) {

    const [IsAuth , setIsAuth] = useState(false);
    const [token , setToken] = useState(null);
    console.log(IsAuth,token)

    function login (token){
        setIsAuth(!false)
        setToken(token)
    }

    function logout(){
        setIsAuth(false)
        setToken(null)
    }

  return (
    <div>
        <AuthContext.Provider value={{ login , logout ,IsAuth}}>
            {childern}
        </AuthContext.Provider>
    </div>
  )
}
