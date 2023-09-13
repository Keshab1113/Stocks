import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Home = () => {
  return (
    <div className=' min-h-screen bg-slate-900 '>
      <Header/>
      <Search/>
      <Footer/>
    </div>
  )
}

export default Home
