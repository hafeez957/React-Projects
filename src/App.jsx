import React from 'react'
import Navbar from './Components/Navbar'
import { NavLink, Route, Routes } from 'react-router-dom'
import OTP from './Components/OTP'
import Capcha from './Capcha/Capcha'
import { ToastContainer } from 'react-toastify'
import PasswordValidation from './Components/PasswordValidation'
import MoviesHub from './Movies/Components/MoviesHub'

const App = () => {
  return (
    < >
       <Navbar/>
       <ToastContainer autoClose={2000}/>
      <Routes>
        <Route element={<OTP />} path='/otp' />
        <Route element={<PasswordValidation />} path='/password' />
        <Route element={<MoviesHub />} path='/movies' />
        <Route element={<Capcha />} path='/capcha' />
        <Route element={<Navbar />} path='/' />
      </Routes>

    </>
  )
}

export default App
