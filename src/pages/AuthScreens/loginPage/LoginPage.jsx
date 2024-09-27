import React, { useState } from 'react'
import './loginPage.css'
import loginImage from '../../../assets/AuthImages/loginImage.jpg'
import logo from '../../../assets/commonImages/logo.png'
import AuthInput from '../../../components/AuthComponents/InputComponents/AuthInput'
import EyeOpen from '../../../assets/AuthImages/eyeopen.svg';
import EyeClose from '../../../assets/AuthImages/eyeclose.svg';
import ForgotRemember from '../../../components/AuthComponents/ForgotRemember/ForgotRemember'
import AuthButton from '../../../components/AuthComponents/AuthButton/AuthButton'
import LoginWith from '../../../components/AuthComponents/LoginWith/LoginWith'
import GoogleButton from '../../../components/AuthComponents/GoogleButton/GoogleButton'
const LoginPage = () => {
    const [open, setOpen] = useState(false)
    
    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <div className="login-parent-container">
      <div className="login-wrapper">
        {/* left side inputs */}
        <div className="login-left-container">
          <div className="login-left">
            <div className="logo-container">
              <img src={logo} alt="" className="logo-image" />
            </div>
            <div className="login-texts-container">
              <p className="main-text">Welcome back!</p>
              <p className="desc-text">
                Enter to get unlimited access to data & information
              </p>
            </div>
            <div className="input-fields">
              <AuthInput
                label="Email"
                placeholder="Enter your mail address"
                type="text"
              />
              <AuthInput
                label="Password"
                placeholder="Enter Password"
                isPassword={true}
                onClick={handleClick}
                image={open ? EyeOpen : EyeClose}
                type={open ? "text" : "password"}
              />

              <ForgotRemember />
            </div>

            {/* buttons and actions */}

            <div className='button-wrappers'>
              <AuthButton buttonText="Login" />
              <LoginWith />
              <GoogleButton/>
            </div>

            {/* buttons and actions */}
          </div>
          {/* left side inputs */}
        </div>
        {/* the right image */}
        <div className="login-right-container">
          <img src={loginImage} alt="" className="login-image" />
        </div>

        {/* the right image */}
      </div>
    </div>
  );
}

export default LoginPage
