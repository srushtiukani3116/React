import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Privateroute({children}) {

    let Isauth = false

    if(!Isauth){
        return Navigate("/login") 
    }

  return (
    <div>
      {children}
    </div>
  )
}
