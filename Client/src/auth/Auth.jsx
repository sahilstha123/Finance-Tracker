import React from 'react'
import { Navigate } from "react-router-dom"
import { useUserContext } from '../context/userContext'
const Auth = ({ children }) => {
  const { userData } = useUserContext()
  return userData?._id ? children : <Navigate to="/" replace />
}

export default Auth