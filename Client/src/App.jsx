import { useEffect, useState } from 'react';
import './App.css'
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
