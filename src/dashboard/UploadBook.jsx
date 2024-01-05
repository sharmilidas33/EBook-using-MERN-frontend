import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Thriller",
        "Romantic",
        "Fantasy",
        "Horror",
        "Science Fiction",
        "History",
        "Programming",
        "Bibliography",
        "Autobiography",
        "Self-help",
        "Memoir",
        "Business"
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handleChangedSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
    }

    // handle book submission
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;
        const imageUrl = form.imageUrl.value;

        const bookObj = {
            bookTitle, authorName, category, bookDescription, bookPdfUrl, imageUrl
        }

        console.log(bookObj)

        //send data to db
        fetch("https://ebook-using-mern.onrender.com/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            // console.log(data);
            alert("Book Uploaded Succesfully!")
            form.reset();
        })
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className="flex gap-8">

                    {/* Book Name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
                    </div>

                    {/* Author Name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Book Author Name" />
                        </div>
                        <TextInput id="authorName" name="authorName" type="text" placeholder="Author name" required />
                    </div>
                </div>

                <div className="flex gap-8">

                    {/* Image URL */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value="Book Image URL" />
                        </div>
                        <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book image URL" required />
                    </div>

                    {/* Category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>

                        <Select id="inputState" name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChangedSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </Select>
                    </div>
                </div>

                {/* Book Description */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' className='w-full' placeholder="Write the description of the book..." required rows={6} />
                </div>

                {/* Book PDF Link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book's PDF URL" required />
                </div>

                <Button type="submit" className='mt-5'>Upload Book</Button>

            </form>
        </div>
    )
}

export default UploadBook
