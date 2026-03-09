import React from 'react'
import Navbar from './Components/Navbar'
import { NavLink, Route, Routes } from 'react-router-dom'
import OTP from './Components/OTP'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    < >
       <Navbar/>
       <ToastContainer autoClose={2000}/>
      <Routes>
        <Route element={<OTP />} path='/otp' />
        <Route element={<Navbar />} path='/' />
      </Routes>

    </>
  )
}

export default App
