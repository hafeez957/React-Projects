import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { NavLink } from 'react-router-dom'

const OTP = () => {

    let [otp, setOtp] = useState()

    let [counter, setCounter] = useState(10)

    let [bool, setBool] = useState(true)

    let navigate = useNavigate()

    let handleOTP = () => {
        setBool(!bool)
        setOtp(Math.floor(Math.random() * 9000 + 1000))
        let x = setInterval(() => {
            setOtp(Math.floor(Math.random() * 9000 + 1000))

        }, 9999);

        let c = setInterval(() => {
            setCounter(--counter)
        }, 1000);
        setTimeout(() => {
            clearInterval(x)
            clearInterval(c)
            toast.dark("OTP session expired")
            setCounter(10)
        }, 10000);
    }



    let hidden = {
        display: "hidden"
    }
    let block = {
        display: "block"
    }
    console.log(otp)
    console.log(bool)

    let handleSubmit = (e) => {
        e.preventDefault()
        let user_otp = e.target[0].value

        if (otp == user_otp) {
            toast.success("Valid")
            // navigate('/password')
        } else {
            toast.error("Invalid")
        }
    }
    return (
        < >
            <div id="home" className='absolute top-40 left-100 gap-3.5'>

                <div id="hero" className='flex  m-auto'>
                    <div id="main-container" className='bg-gray-200 w-[60vw] h-[50vh] rounded-2xl'>
                        <h1 className='text-2xl text-center p-4'>OTP Validator</h1>
                        <div id="otp" className='text-center'>
                            <button onClick={handleOTP} className='p-2 pl-3 pr-3 bg-green-400 w-fit m-auto rounded-2xl'>Send OTP</button>

                            <div id="input" className='hidden items-center' style={bool ? hidden : block}>
                                <p className='p-4'>Your OTP is {otp}</p>
                                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-7 '>
                                    <input type="number" placeholder='Enter the OTP' className='w-48 m-auto p-1 mb-3 border-2 border-b-blue-600 border-t-orange-400' />
                                    <button className='p-2 pl-3 pr-3 bg-pink-300 w-fit m-auto rounded-2xl'>Submit</button>
                                    <p>Your OTP will expire in {counter}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default OTP
