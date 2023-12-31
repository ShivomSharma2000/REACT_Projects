import React from 'react'
import { useNavigate } from 'react-router-dom';

function Support() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate("/labs")
  }

  function backHandler(){
    navigate(-1)
  }

  return (
    <>
      <div>This is Support Page</div>
      <button className='border-4' onClick={clickHandler}>Move to Labs page</button>
      <button className='border-4' onClick={backHandler}>Go back</button>
    </>
    
  )
}

export default Support