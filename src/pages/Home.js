import React, { useState, useEffect } from "react";
import '../App.css';
import Books from '../components/Books.js'

function Home() {

    const [books, setBooks ] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/books")
        .then((response) => response.json())
        .then((books) => setBooks(books))
    },[])
    console.log(books)
    
    return(
        <div className="parent">
            {books.map((book) =>(
                <Books
                    key={book.id}
                    authors = {book.authors}
                    averageRating = {book.averageRating}
                    description = {book.description}
                    id = {book.id}
                    image = {book.imageLinks}
                    language = {book.language}
                    pageCount = {book.pageCount}
                    publishedDate = {book.publishedDate}
                    publisher = {book.publisher}
                    ratingsCount = {book.ratingsCount}
                    title = {book.title}
                />
            ))}
        </div>
    )
}

export default Home;