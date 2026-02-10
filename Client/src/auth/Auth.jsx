import React from 'react'
import {Navigate} from "react-router-dom"
const Auth = ({children}) => {
    const isLoggedIn =false
  return isLoggedIn?children:<Navigate to ="/" replace/>
}

export default Auth