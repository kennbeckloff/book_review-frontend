import React from "react";
import { removeBookId } from "../utils/localStorage";
import { Link } from "react-router-dom";

const WantTo = () => {
  const { loading, data, refetch } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);
  const userData = data?.me || [];

  const handleRemoveBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

      removeBookId(bookId);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  // if empty?
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Link to="/">←Back To Search</Link>
      <div>
        <div>
          <h1>Books I Want To Read</h1>
        </div>
      </div>
      <div className="uk-container">
        <h2>
          {userData.readingList?.length
            ? `Viewing ${userData.readingList.length} saved ${
                userData.readingList.length === 1 ? "book" : "books"
              }:`
            : ""}
        </h2>
        <div
          className="uk-child-width-1-3@m uk-grid-small uk-grid-match "
          uk-grid="true">
          {userData.readingList?.map((book) => {
            return (
              <div key={book.bookId} border="dark">
                {book.image ? (
                  <img
                    src={book.image}
                    width="auto"
                    height="auto"
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <div className="uk-card" id="want-to-read">
                  <h2 className="uk-card-title">{book.title}</h2>
                  <p className="small">Author: {book.authors}</p>
                  <p className="uk-panel-scrollable">{book.description}</p>
                  <button
                    className="uk-button"
                    onClick={() => handleRemoveBook(book.bookId)}>
                    Remove this Book!
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WantTo;
