import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div className="w-full h-screen bg-[url('screen2.avif')] bg-no-repeat bg-cover flex flex-col  items-center">
      <h1 className=' text-5xl text-white mt-52 font-semibold font-serif'>StockZilla</h1>
      <h2 className=' text-3xl text-white mt-2 capitalize font-semibold font-serif'>The Modern Stock Screener that helps you pick better stocks.</h2>
      <div className=' w-80  mt-5 flex justify-around h-12'>
        <button className=' border h-12 w-36 text-zinc-50 font-semibold text-lg rounded-full hover:bg-white hover:text-black'><Link to="/market">Get Started</Link></button>
        <button className=' h-12 w-36 text-black bg-white rounded-full font-semibold text-lg hover:text-white hover:bg-transparent hover:border'>AboutUs</button>
      </div>
    </div>
  )
}

export default Search
