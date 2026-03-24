import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.css'
import "./style/global.css"
import "./style/variable.css"
import Login from './pages/Login';
import { Routes, Route, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import SignUp from './pages/SignUp';
import DefaultLayout from './components/Layout/DefaultLayout';
import Transaction from './pages/Transaction';
import Auth from './auth/Auth';
import NotFound from './pages/NotFound';
import { useUserContext } from './context/userContext';
import { autoLogin } from './utils/users';
import SplashScreen from './components/common/SplashScreen';
import Dashboard from './pages/dashaboard/Dashboard';

function App() {
  const { userData, setUserData, appLoading, setAppLoading } = useUserContext()
  // Check if splash has already been shown in this session
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("hasShownSplash");
  });
  const location = useLocation()

  /**
   * Handle the splash screen completion by saving the state in sessionStorage
   * and updating the local state to hide the splash screen.
   */
  const handleSplashComplete = () => {
    sessionStorage.setItem("hasShownSplash", "true");
    setShowSplash(false);
  }

  /**
   * Auto-login logic: If no user data is present, try to log in automatically.
   * If user is already authenticated, skip the app loading spinner and splash screen.
   */
  useEffect(() => {
    if (!userData?._id) {
      autoLogin(setUserData, setAppLoading)
    } else {
      setAppLoading(false);
      // Skip splash if user is already in a session
      setShowSplash(false);
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
    return <SplashScreen onComplete={handleSplashComplete} />;
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
