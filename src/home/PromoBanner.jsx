import React from 'react'
import { Link } from 'react-router-dom'
import AntBookImg from '../assets/anticipatedbook.jpg'

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-orange-200 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 Most Anticipated Romance Books</h2>
            <Link to="/shop" className='block'>
                    <button className='bg-pink-800 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Advance Order Now!</button>
            </Link>
        </div>

        <div>
            <img src={AntBookImg} alt="" className='h-90 w-70 object-cover rounded-md'/>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
