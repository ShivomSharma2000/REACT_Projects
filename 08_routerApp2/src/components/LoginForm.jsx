import React, { lazy, useState } from 'react'
import {toast} from 'react-hot-toast';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({email:"", password:""})
  const [isPassVisible, setIsPassVisible] = useState(false)


  function changeHandler(event){
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    console.log('Printing the form data');
    console.log(formData);
    toast.success('Logged In')
    navigate('/dashboard')              //this is link(not component)
    // ('../pages/Dashboard')
  }

  return (

    <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6">
      
        <label className='w-full'>
          <h1  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></h1>
          <input 
              required
              type='email' 
              name='email'
              loading='lazy'
              value={formData.email}
              placeholder='Enter email id'
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
           />
        </label>

        <label className='w-full relative'>
          <h1 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></h1>
          <input 
              required
              type={isPassVisible ? 'text': 'password'} 
              name='password'
              loading='lazy'
              value={formData.password}
              placeholder='Enter Password'
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
           />

  
              <span className='absolute right-3 top-[38px] cursor-pointer' 
                onClick={()=>setIsPassVisible((prev)=>!prev)}>
                 {isPassVisible ? (<GoEye fontSize={24} fill='#AFB2BF' />) : (<GoEyeClosed fontSize={24} fill='#AFB2BF' />) } 
                </span> 
          
      

        {/* <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
        </Link> */}
        </label>

      <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}


export default LoginForm