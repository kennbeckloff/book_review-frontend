import React, { useState, useEffect } from "react";
import '../App.css';
import Books from '../components/Books.js'


// Fetches book results for the selected list. Displays a BookItem for each result to the user. Number of books displayed controlled by ListSelector, defaults to 10.
const Library = (props) => {
  const [libraryArray, setLibraryArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch book results for selected list. Re-evaluates whenever user selects a new list from ListSelector
  useEffect(() => {
    const fetchBooks = async (searchList) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:9393/books`,
        );

        const responseData = await response.json();
        const libraryData = responseData.results.books;

        // Populate array with relevant data
        const loadedBooks = [];
        for (const key in libraryData) {
          loadedBooks.push({
           //show title,author,description,image,link
            title: libraryData[key].title,
            author: libraryData[key].author,
            description: libraryData[key].description,
            image: libraryData[key].image,
            link: libraryData[key].link,

          });
        }

        setLibraryArray(loadedBooks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };
    fetchBooks(props.selectedList);
  }, [props.selectedList]);

  // Lift book info from BookItem to App.
  const openModalHandler = (bookData) => {
    props.onOpenModal(bookData);
  };

  // Ensure correct quanity of books is displayed.
  const numResults = props.filterQuantity || libraryArray.length;

  return (
    <div classNam>
      {isLoading && <img src={loadingImage} />}
      {!isLoading &&
        libraryArray
          .slice(0, numResults)
          .map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onOpenModal={openModalHandler}
            />
          ))}
    </div>
  );
};

export default Books;