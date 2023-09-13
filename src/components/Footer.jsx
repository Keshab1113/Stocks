import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=' bg-black mt-auto h-96 justify-end flex flex-col font-serif'>
      <div className=" bg-slate-500 h-4/5 flex capitalize w-screen pt-12">
        <div className="h-full flex flex-col w-1/3  items-center">
            <h3 className=' text-white border-b-2'>quick links</h3>
            <Link to="#"className="text-white mt-4 hover:border-b-2">Home</Link>
            <Link to="#"className="text-white mt-4 hover:border-b-2">About</Link>
            <Link to="#"className="text-white mt-4 hover:border-b-2">Contact</Link>
        </div>
        <div className="h-full flex flex-col w-1/3 items-center">
            <h3 className=' text-white border-b-2'>follow me</h3>
            <Link to="#" className="text-white mt-2 hover:border-b-2">facebook</Link>
            <Link to="#" className="text-white mt-2 hover:border-b-2">instagram</Link>
            <Link to="#" className="text-white mt-2 hover:border-b-2">twitter</Link>
            <Link to="#" className="text-white mt-2 hover:border-b-2">linkedin</Link>
        </div>
        <div className="h-full flex flex-col w-1/3 items-center">
            <h3 className=' text-white border-b-2'>about this page</h3>
            <p className=' text-white'>this is a web page of stock market analysis, where you can see all the BSE & NSE stocks price.</p>
        </div>
      </div>
      <div className='h-1/5 bg-slate-600 flex justify-center items-center'>
        <h1 className="text-white capitalize font-semibold font-serif"> created by <span className=' text-slate-100 font-bold cursor-pointer font-serif'> mr. keshab das </span>&<span className=' text-slate-100 font-bold cursor-pointer font-serif'> mr. swadesh pal </span>@2023 || a MERN-stack web developer </h1>
      </div>
    </div>
  )
}

export default Footer
