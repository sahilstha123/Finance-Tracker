import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
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
import SplashScreen from './components/common/SplashScreen';

function App() {
  const { userData, setUserData, appLoading, setAppLoading } = useUserContext()
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    if (!userData?._id) {
      autoLogin(setUserData, setAppLoading)
    } else {
      setAppLoading(false)
    }
  }, [userData?._id, setAppLoading, setUserData])

  if (appLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-success">
        <Spinner animation="border" variant="success" />
      </div>
    )
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

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
