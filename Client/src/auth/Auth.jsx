import React from 'react'
import { Navigate } from "react-router-dom"
import { useUserContext } from '../context/userContext'
const Auth = ({ children }) => {
  const { userData, appLoading } = useUserContext()

  if (appLoading) return null; // Or a smaller loader

  return userData?._id ? children : <Navigate to="/" replace />
}

export default Auth