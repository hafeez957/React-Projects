import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    < >
      <nav className='flex flex-col w-72 h-screen p-4 bg-amber-400' id='navbar'>
            <div className="p-6">
                <h1 className='text-3xl'>Mini Projects</h1>
            </div>

            <div className="p-5">
                <ul className='flex flex-col gap-4'>
                    
                   <li><NavLink to={'/otp'}>OTP Validation</NavLink></li>
                     <li><NavLink  to={'/password'}>Password Validation</NavLink></li>
                     <li><NavLink  to={'/movies'}>Movies Center</NavLink></li>
                     <li><NavLink  to={'/capcha'}>Capcha Validation</NavLink></li>
                </ul>
            </div>
      </nav>
    </>
  )
}

export default Navbar
