import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const { _id, bookTitle, imageUrl, bookDescription, category,
    bookPdfUrl } = useLoaderData();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle full description visibility
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Display only the first 100 words of the description
  const truncatedDescription = showFullDescription
    ? bookDescription
    : `${bookDescription.split(' ').slice(0, 100).join(' ')}...`;

  // Check if the description has more than 100 words
  const isLongDescription = bookDescription.split(' ').length > 100;

  return (
    <div className='px-4 lg:px-24 bg-amber-100 flex items-center flex-row justify-center mt-[-30px]'>

      <div className='flex w-full flex-col md:flex-row justify-center items-center gap-6 py-40'>
        {/*Left Side*/}
        <div className='relative px-4 lg:px-24'>
          <img src={imageUrl} alt="" className='h-96' />
        </div>


        {/*Right Side*/}
        <div className='flex flex-col sm:flex-row justify-between gap-6  md:w-1/2 '>
          <div>
            <h2 className='text-2xl font-bold my-5 md:w-3/4 leading-snug'>{bookTitle}</h2>
            <p className='mb-10 md:w-5/6'> {truncatedDescription}
              {isLongDescription && (
                <span className='text-blue-500 cursor-pointer' onClick={toggleDescription}>
                  {' '}
                  {showFullDescription ? 'See Less' : 'See More'}
                </span>
              )}
            </p>
          </div>
          <div className='flex flex-col sm:flex-col sm:gap-0 justify-between  md:w-3/4 my-14'>
            <div>
              <h3 className='text-1xl font-bold'>Category</h3>
              <p className='text-base'>{category}</p>
            </div>
          </div>

          <Link to={bookPdfUrl} target="_blank" className='mt-12 block'>
            <button className='bg-pink-800 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Download PDF</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default SingleBook

