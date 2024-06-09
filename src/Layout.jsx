import React from 'react'
import Header from './assets/components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/footer/Footer'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout