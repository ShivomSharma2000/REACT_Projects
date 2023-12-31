import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate("/about")
  }

  return (
    <>
      <div>This is Labs Page</div>
      <button className='border-4' onClick={clickHandler}>Move to About</button>
    </>
    

  )
}

export default Labs