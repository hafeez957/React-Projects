import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Capcha = () => {

  let [capcha, setCapcha]=useState('')
    let handleCapcha=()=>{


        let char=Math.floor(Math.random()*10+66)
        let smallchar=Math.floor(Math.random()*10+97)
        let  num=Math.floor(Math.random()*10)

        return String.fromCharCode(char)+" "+num+" "+String.fromCharCode(smallchar)+" "

        // console.log(String.fromCharCode(char))
      
        // console.log(String.fromCharCode(smallchar))
        // console.log((num))

        // if(char>=65 && char<90 || smallchar>=97 && smallchar<=122)
          
        }
        
        useEffect(()=>{
        setCapcha(handleCapcha()+handleCapcha())
        handleCapcha()
      },[])

      // console.log(capcha.replaceAll(' ',''))

      let handleSubmit=(e)=>{
        e.preventDefault()
        let userCapcha=e.target[0].value
        if(userCapcha==capcha.replaceAll(' ','')){
          toast.success("valid")
        }else{
          toast.error("Invalid, Please try again")
        }

      }
  return (
    < >
      <div className="absolute top-40 left-126 bg-mauve-200 h-90 w-200 flex flex-col gap-9 rounded-4xl p-10">
        <h1 className='text-center text-2xl text-violet-800'>Capcha Validation</h1>

        <div id="Capcha" className='flex justify-center items-center gap-4'>
          <p>Capcha Code :</p>
          <div className="w-25 h-10 p-2 rounded-2xl bg-gray-400 text-white text-center">
            <p>{capcha}</p>
          </div>
        </div>
        <div id="validation" className='' >
          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 items-center'>
            <label htmlFor="capcha">Enter Captcha Code : </label>
            <input type="text" id='capcha' className='bg-sky-200 w-66 rounded p-2 text-black' placeholder='Enter the Capcha Code here...'/>
            <button className='bg-green-300 p-3 rounded-2xl'>Submit</button>
          </form>
        </div>
      </div>
    </ >
  )
}

export default Capcha
0