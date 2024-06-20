import React from 'react'
import './CSS/LoginSignup.css'

const loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sighn Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Name' />
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Passwor'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an accound?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default loginsignup