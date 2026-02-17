import { useEffect, useState } from 'react';
import './App.css'
import "./style/global.css"
import "./style/variable.css"
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import financialTips from "./utils/financialTips"
import SignUp from './pages/SignUp';
import DefaultLayout from './components/Layout/DefaultLayout';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Auth from './auth/Auth';
import { useUserContext } from './context/userContext';
import { autoLogin } from './utils/users';
function App() {
  const { userData,setUserData } = useUserContext()
  useEffect(() => {
    !userData?._id && autoLogin(setUserData)
  }, [userData?._id])
  return (
    <div >
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={
            <Auth>
              <Dashboard />
            </Auth>
          } />
          <Route path="/transaction" element={
            <Auth>
              <Transaction />
            </Auth>
          } />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
