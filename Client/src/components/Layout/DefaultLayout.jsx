import React from 'react'
import Header from './header/Header'
import {Outlet} from "react-router-dom"
import Footer from './footer/Footer'
const DefaultLayout = () => {
  return (
    <div className="wrapper">

        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default DefaultLayout