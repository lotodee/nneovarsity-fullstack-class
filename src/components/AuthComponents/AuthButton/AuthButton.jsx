import React from 'react'
import './AuthButton.css'


const AuthButton = ({buttonText}) => {
  return (
      <button className='auth-btn'>
         {buttonText}
      </button>
      
  )
}

export default AuthButton