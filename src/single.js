import "./App.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { get } from "./BooksAPI";
import Card from "./Card";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      get(id).then((book) => setBook(book));
    }
  }, [id]);

  console.log(typeof book);
  // how to access the book item object in the console?


  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            
                   < Link to="/"><h1>MyReads</h1></Link>
                   < Link to="/">back to home MyReads</Link>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">
                  
            { book && (   book.title ) }
            
                </h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* show book info id */}
                    <div>
                      {book && (
                        <Card
                          key={book.id}
                          id={book.id}
                          imageLinks={book.imageLinks.smallThumbnail}
                          title={book.title}
                          authors={book.authors}
                          shelf={book.shelf}
                        />
                      )}
                    </div>
            { book && (   book.description ) }

                  </ol>
                </div>
              </div>

            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
