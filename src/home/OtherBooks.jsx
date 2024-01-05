import React, { useEffect, useState } from 'react'
import BooksCard from '../components/BooksCard';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://ebook-using-mern.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(7, 20)))
    }, [])
    return (
        <div>
            <BooksCard books={books} headline="Other Books" />
        </div>
    )
}

export default OtherBooks
