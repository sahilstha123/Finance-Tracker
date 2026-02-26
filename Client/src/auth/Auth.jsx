import React from 'react'
import { Navigate, useLocation } from "react-router-dom"
import { useUserContext } from '../context/userContext'
const Auth = ({ children }) => {
  const location = useLocation()
  const { userData, appLoading } = useUserContext()

  if (appLoading) return null; 

  return userData?._id ? children : <Navigate to="/" replace state={{from:location}}/>
}

export default Auth