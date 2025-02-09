import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import './Header.css';


const Header = () => {
  const[theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme"))||"light");

  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])

  return (
    <header>
        <div className="log">
            <img className='log-img' src={Logo} alt='Taskmate log'/>   
            <span className='log-name'>Taskmate</span>
        </div>
        <div className="them-selector">
            <span className={theme === "light" ? "light active ":"lighti"}  onClick={()=>{setTheme("light")}} ></span>
            <span className={theme === "medium" ? "medium active ":"mediam"} onClick={()=>{setTheme("medium")}}></span>
            <span className={theme === "dark" ? "dark active ":"dak"} onClick={()=>{setTheme("dark")}}></span>
            <span className={theme === "g-1" ? "g-1  active ":"g-11"} onClick={()=>{setTheme("g-1")}}></span>
            <span className={theme === "g-2" ? "g-2 active ":"g-22"} onClick={()=>{setTheme("g-2")}}></span>
            <span className={theme === "g-3" ? "g-3 active ":"g-33"} onClick={()=>{setTheme("g-3")}}></span>
        </div>
    </header>
  )
}

export default Header