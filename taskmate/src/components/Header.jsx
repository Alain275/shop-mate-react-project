import React from 'react'
import Logo from '../assets/logo.svg'
import './Header.css';


const Header = () => {
  return (
    <header>
        <div className="log">
            <img className='log-img' src={Logo} alt='Taskmate log'/>   
            <span className='log-name'>Taskmate</span>
        </div>
        <div className="them-selector">
            <span className="light active"></span>
            <span className="medium "></span>
            <span className="dark"></span>
            <span className="g-1"></span>
            <span className="g-2"></span>
            <span className="g-3"></span>
        </div>
    </header>
  )
}

export default Header