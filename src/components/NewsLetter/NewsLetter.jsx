import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='text' placeholder='Email id'></input>
        <button>Scbscribe</button>
      </div>
        
    </div>
  )
}

export default NewsLetter