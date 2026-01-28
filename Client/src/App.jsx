import { useEffect, useState } from 'react';
import './App.css'
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import  financialTips  from "./utils/financialTips"
import SignUp from './pages/SignUp';
function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route index element={<Login />} />
        <Route  path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
