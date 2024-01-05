import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-amber-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/*Left Side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-pink-600'>Buy and Sell Books <span className='text-pink-800'>for the Best Prices</span></h2>
            <p className='md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti reprehenderit illum autem vitae, dolorum explicabo deleniti odio eveniet hic soluta, ipsum ea ex quasi tempora quas impedit, dignissimos quis.</p>
            <div>
                <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-pink-900 px-6 py-2 text-white font-medium hover:bg-gray-800 transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        {/*Right Side*/}
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
