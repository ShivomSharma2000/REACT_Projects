import React, { lazy, useState } from 'react'
import toast from 'react-hot-toast';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", createPassword:"", confirmPassword:""})
  const [isPassVisible1, setIsPassVisible1] = useState(false)
  const [isPassVisible2, setIsPassVisible2] = useState(false)
  const [accountType, setAccountType] = useState('student')


  function changeHandler1(event){
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }))
  }

  function changeHandler2(event){
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.createPassword != formData.confirmPassword){
      toast.error('Passwords do not match')
    }
    else{
      setIsLoggedIn(true)
      toast.success('Account Created')

      const accountData = {
            ...formData
      }
      //accumulate accountType and rest of all data also
      const finalData = {
        ...accountData, accountType
      }

      console.log('Printing Final account data');
      console.log(finalData);
      navigate('/dashboard')
    }
  }

  return (
    
    <div>

        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
          <button
          className={`${accountType === 'student'
          ?
          'bg-richblack-900 text-richblack-5 ':'bg-transparent text-richblack-200'} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=>setAccountType('student')}
          >Student</button>

          <button
          className={`${accountType === 'instructor'
          ?
          'bg-richblack-900 text-richblack-5 ':'bg-transparent text-richblack-200'} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=>setAccountType('instructor')}
          >Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            {/* first and last name */}
              <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                  <label className='w-full'>
                    <h1 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></h1>
                    <input 
                        required
                        type='text' 
                        name='firstName'
                        loading='lazy'
                        value={formData.firstName}
                        placeholder='Enter First Name'
                        onChange={changeHandler1}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                  </label>

                  <label className='w-full'>
                    <h1 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></h1>
                    <input 
                        required
                        type='text' 
                        name='lastName'
                        loading='lazy'
                        value={formData.lastName}
                        placeholder='Enter Last Name'
                        onChange={changeHandler1}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                  </label>
                </div>

            {/* Email address */}
            <div className='mt-[20px]'>
                <label className='w-full mt-[20px]'>
                    <h1 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></h1>
                    <input 
                        required
                        type='email' 
                        name='email'
                        loading='lazy'
                        value={formData.email}
                        placeholder='Enter email id'
                        onChange={changeHandler1}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />
                 </label>
            </div>

            {/* create and confirm password */}
            <div className='w-full flex flex-col md:flex-row gap-4 mt-[20px] '>
                  <label className='w-full relative'>
                    <h1 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></h1>
                    <input 
                        required
                        type={isPassVisible1 ? 'text': 'password'} 
                        name='createPassword'
                        loading='lazy'
                        value={formData.createPassword}
                        placeholder='Enter Password'
                        onChange={changeHandler1}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                    />

            
                        <span
                        className='absolute right-3 top-[38px] cursor-pointer' 
                         onClick={()=>setIsPassVisible1((prev)=>!prev)}>
                          {isPassVisible1 ? (<GoEye fontSize={24} fill='#AFB2BF'/>) : (<GoEyeClosed fontSize={24} fill='#AFB2BF'/>) } 
                          </span> 
                    
                  </label>

                  <label className='w-full relative'>
                    <h1 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup  className='text-pink-200'>*</sup></h1>
                    <input 
                        required
                        type={isPassVisible2 ? 'text': 'password'} 
                        name='confirmPassword'
                        loading='lazy'
                        value={formData.confirmPassword}
                        placeholder='Confirm Password'
                        onChange={changeHandler2}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
                    />

            
                        <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={()=>setIsPassVisible2((prev)=>!prev)}>
                          {isPassVisible2 ? (<GoEye fontSize={24} fill='#AFB2BF'/>) : (<GoEyeClosed fontSize={24} fill='#AFB2BF'/>) } 
                          </span> 
                    
                  </label>

            </div>

            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>

    </div>

  )
}

export default SignupForm
