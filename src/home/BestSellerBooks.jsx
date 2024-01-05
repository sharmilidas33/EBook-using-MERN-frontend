import React, { useEffect, useState } from 'react'
import BooksCard from '../components/BooksCard';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data => setBooks(data.slice(0,7))).catch((error) => console.error("Error fetching data:", error));
    }, [])
  return (
    <div>
      <BooksCard books={books} headline="Best Selling Books"/>
    </div>
  )
}

export default BestSellerBooks;
