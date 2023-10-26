import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const Spinner = () => {
  return (
      <div className='w-full h-screen flex justify-center items-center'>
      <FadeLoader color="gray" size={200} />
    </div>
  )
}

export default Spinner