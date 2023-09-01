import React from 'react'
import logo from './picture/reddit-logo-text.png'
import style from './navigator.css';


function Navigator() {


  return (
    <nav className='navigator'>
      <img className="logo" src={logo} />
      <input 
      className="input"
      placeholder='Search Reddit'
      />
      <button
      className="sign-up-btn"
      >Sign up</button>
      <button
      className="sign-up-btn"
      >Log in</button>


    </nav>
  )
}

export default Navigator
