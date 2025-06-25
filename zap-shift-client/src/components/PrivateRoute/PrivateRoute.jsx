import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import { Navigate } from 'react-router'

function PrivateRoute() {
    const {user, loading} = useContext(AuthContext)


    if(!user){
        return <Navigate to='/login'></Navigate>
    }
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute