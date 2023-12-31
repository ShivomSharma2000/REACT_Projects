import React from 'react'
import signImage from '../assets/signup.png'
import Template from '../components/Template'

function Signup({setIsLoggedIn}) {
  return (
    <div>
      {<Template 
        title='Join the millions learning to
                code with StudyNotion for free'
        desc1='Build skills for today,tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={signImage}
        formtype='signup'
        setIsLoggedIn={setIsLoggedIn}
      />}
    </div>
  )
}

export default Signup