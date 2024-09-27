import React from 'react'
import './authinput.css'


const AuthInput = ({label,placeholder,isPassword,onClick,image,type}) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">
        {label} <span style={{ color: "red" }}>*</span>
      </p>
      <div className='input-box'>
              <input type={ type} className="input" placeholder={placeholder} />
        {isPassword && (
          <img src={image} alt="" style={{ width: "30px", height: "30px" }} className='icon' onClick={onClick}/>
        )}
      </div>
    </div>
  );
}

export default AuthInput
