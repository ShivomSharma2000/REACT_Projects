import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

function Login({setIsLoggedIn}) {
  return (
    <div>
      {<Template 
        title='Welcome Back'
        desc1='Build skills for today,tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={loginImage}
        formtype='login'
        setIsLoggedIn={setIsLoggedIn}
      />}
    </div>
  )
}

export default Login