import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
const truncateDescription = (description, wordLimit) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])

  const redirectToPdfLink = (pdfUrl) => {
    window.location.href = pdfUrl;
  };

  return (
    <div className=' mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center text-pink-800'>Browse All Books Available</h2>

      <div className='grid gap-10 my-12 lg:grid-cols-4 sm-grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
          >
            <img src={book.imageUrl} alt="" className='h-96 object-contain' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {truncateDescription(book.bookDescription, 50)}
            </p>

            <button className='bg-pink-700 font-semibold text-white py-2 rounded'
              onClick={() => redirectToPdfLink(book.bookPdfUrl)}>Grab Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
