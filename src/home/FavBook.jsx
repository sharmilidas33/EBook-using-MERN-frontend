import React from 'react'
import FavBookImg from '../assets/favoritebook.webp'
import { Link } from 'react-router-dom'

const FavBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
            </div>

            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-4xl font-bold my-5 md:w=-3/4 leading-snug'>Find Your Favourite <span className='text-pink-700'>Books Here!</span></h2>
                <p className='text-lg mb-10 md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dignissimos vel at velit nulla, temporibus, sapiente adipisci hic eveniet laborum quisquam. Qui delectus unde beatae quidem saepe impedit optio porro!</p>


                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>500+</h3>
                        <p className='text-base'>Registered Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1000+</h3>
                        <p className='text-base'>PDF Downloads</p>
                    </div>
                </div>

                <Link to="/shop" className='mt-12 block'>
                    <button className='bg-pink-800 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button>
                </Link>
            </div>
        </div>
    )
}

export default FavBook
