import React, { useState } from 'react'
import { toast } from 'react-toastify';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordValidation = () => {

  let [pswdStrength,setPswdStrength]=useState('')
  let [cpswdStrength,setcPswdStrength]=useState('')
  let [bool,setBool]=useState(false)
  let [visibilityBool,setVisibilityBool]=useState(true)

  let handlePswdLength=(e)=>{
    let length_pswd=String(e.target.value).length;
    // console.log(String(length_pswd).length)
    if(length_pswd<=3){
      setPswdStrength("Weak Password")
    }else if(length_pswd>3 && length_pswd<=8){
      setPswdStrength("Average Password")
    }else if(length_pswd>8){
      setPswdStrength("Strong password")
      setBool(true)
    }
    
  }
  let red={
    color:"red"
  }
  let orange={
    color:"blue"
  }
  let green={
    color:"green"
  }
  let block={
    display:"block"
  }
  let hidden={
    display:"hidden"
  }
  let handleValidation=(e)=>{
    e.preventDefault()
    let pswd=(e.target[0].value);
    let cpswd=(e.target[1].value);

    if(pswd!==cpswd){
      toast.error("password is not matching")
    }else{
      toast.success("Welcome")
      
    }
  }
  let handleEye=()=>{
    setVisibilityBool(!visibilityBool)
  }
  return (
    < >
      <div id="home" className='absolute top-40 left-100 gap-3.5'>

                <div id="hero" className='flex  m-auto'>
                    <div id="main-container" className='bg-gray-200 w-[60vw] h-[65vh] rounded-2xl'>
                        <h1 className='text-2xl text-center p-4 text-blue-400'>Password Validation</h1>
                         <div id="form-data" className='border-2 border-amber-950 w-[30vw] m-auto p-8 rounded-2xl'>
                          <form action="" className='flex flex-col gap-2 items-center' onSubmit={handleValidation}>
                           <div id="pswd" className='flex flex-col  '>
                             <label htmlFor="ps" className='ml-3'>Enter your password</label>
                            <input id='ps' type={visibilityBool?'password':'text'} onChange={handlePswdLength} className='border-2 border-gray-500 w-62 rounded-2xl p-2' placeholder='Enter your password'/>
                            <p className='relative bottom-9 left-53' onClick={handleEye} >{visibilityBool?<VisibilityOffIcon/>:<RemoveRedEyeIcon/>}</p>
                           </div>
                            <p className='relative bottom-3'  style={pswdStrength==='weak password'?red:pswdStrength==='Average Password'?orange:pswdStrength==='Strong password'?green:red}>{pswdStrength} </p>
                            <div id="cpswd" className='flex flex-col'>
                              <label htmlFor="cp" className='ml-3'>Confirm your password</label>
                            <input id='cp' type={visibilityBool?'password':'text'} className='border-2 border-gray-500 w-62 rounded-2xl p-2' placeholder='Confirm your password' />
                            <p className='relative bottom-9 left-53' onClick={handleEye} >{visibilityBool?<VisibilityOffIcon/>:<RemoveRedEyeIcon/>}</p>
                            </div>
                            <button className='hidden bg-blue-400 p-2 rounded-2xl w-36' style={bool?block:hidden}>Validate</button>
                          </form>
                         </div>
                    </div>
                </div>
            </div>
    </ >
  )
}

export default PasswordValidation
