import React from 'react'
import './GoogleButton.css'
import Google from '../../../assets/AuthImages/google.jpg'
const GoogleButton = () => {
    return <button className="auth-google-btn">
        
            <img src={Google} alt=""  className='google-image'/>
            <p className='google-text'>Sign up with google</p>
      </button>;
}

export default GoogleButton