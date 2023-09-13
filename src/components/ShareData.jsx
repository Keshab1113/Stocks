import React from 'react'
import Header from './Header'
import { BsCurrencyRupee } from "react-icons/bs";
import Footer from './Footer'

const ShareData = () => {
  return (
    <div className=' bg-slate-400 w-full h-full'>
      <Header/>
      <h1 className=" w-11/12 ml-5 mt-7 text-2xl font-semibold font-serif text-white">Indian Railway Finance Corp</h1>
      <p className='ml-5 text-white text-2xl mt-5 flex items-center'><BsCurrencyRupee/> 80.36 <p className='ml-6 text-white text-xs'>-23.65(2.03%)</p></p>
      <div className='mt-5 w-9/12 h-[30rem] bg-slate-300 mx-auto'> </div>
      <div className=' w-9/12 mx-auto mt-5 pt-2 flex justify-around border-t-2 mb-5 h-9'>
      <button className=' text-white w-12 rounded border '>NSE</button>
      <button className=' text-white w-12 rounded hover:border '>1d</button>
      <button className=' text-white w-12 rounded hover:border '>1w</button>
      <button className=' text-white w-12 hover:border rounded '>1m</button>
      <button className=' text-white w-12 hover:border rounded'>1y</button>
      <button className=' text-white w-12 hover:border rounded'>3y</button>
      <button className=' text-white w-12 hover:border rounded'>5y</button>
      <button className=' text-white w-12 hover:border rounded'>All</button>
      </div>
      <div>
      <h1 className=" w-11/12  border-b mt-7 text-2xl ml-14 font-semibold font-serif text-white">Overview</h1>
      <div className=' bg-slate-400 flex justify-around'>
      <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Open<h1>125</h1></h1>
      <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Prev. Close<h1>125</h1></h1>
      <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Volume<h1>125</h1></h1>
      <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Market Cap<h1>125</h1></h1>
      </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default ShareData
