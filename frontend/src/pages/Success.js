import React from 'react'
import SUCCESSIMAGE from "../assest/success.png"
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-10 m-2'>
        <img
            src={SUCCESSIMAGE}

        />
        <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
        <Link to="/order" className='p-2 px-3 mt-5 my-2 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success;