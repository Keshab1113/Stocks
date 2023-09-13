import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header = () => {

  const [theme, setTheme] = useState(localStorage.getItem("mode"));

  useEffect(()=>{
    if(theme==="light"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handelThemeSwitch = ()=>{
    if(theme=="dark"){
      setTheme("light");
      localStorage.setItem("mode","light");
    }
    else{
      setTheme("dark");
      localStorage.setItem("mode","dark");
    }
  }


  return (
    <div>
      <nav className=' bg-white shadow-lg dark:bg-slate-600 h-16 flex items-center  justify-center'>
            <ul className='flex w-screen justify-between h-full'>
                <li className='rounded-full text-blue-100 mx-2 cursor-pointer flex ml-6 justify-center items-center h-full'>{theme==="dark"?<img src={logo2} alt="This is a picture" className=' h-10 w-12'/>:<img src={logo} alt="This is a picture" className=' h-10 w-12'/>}<h1 className='ml-[-20px] text-2xl font-semibold text-slate-700 dark:text-white'>StockZilla</h1></li>
                <div className='flex justify-center items-center'>
                <li className='text-slate-900 dark:text-blue-100 mx-2 cursor-pointer mr-5 text-xl flex justify-center items-center'><Link to="#">Login</Link></li>
                <div className=" top-2 cursor-pointer right-2 rounded-full bg-black dark:bg-white text-red-50 ml-auto w-10 h-10 grid items-center justify-items-center text-xl dark:text-black mx-4"><button onClick={handelThemeSwitch}>{theme==="dark"?<BsFillMoonFill/>:<BsFillBrightnessHighFill/>}</button></div>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Header
