import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("https://ebook-using-mern.onrender.com/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])

  //Delete book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://ebook-using-mern.onrender.com/delete-book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
    //   console.log(data); 
    // setAllBooks(data);
    alert("Book Deletion Successful!");
    window.location.reload();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* Table for book data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Sl.no.</Table.HeadCell>
          <Table.HeadCell> Book Name   </Table.HeadCell>
          <Table.HeadCell> Author Name </Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices </Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$16.00</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 '>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default ManageBooks
