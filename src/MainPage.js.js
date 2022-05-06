import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll, get, update, search } from "./BooksAPI";
import Card from "./Card";
// import { useEffect } from "react/cjs/react.production.min";

// create a function to update the book shelf when changed option is selected 



function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [query, setQuery] = useState("");
  const [searchF, setsearchf] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    getAll().then((data) => setAll(data));
  }, []);

  function handleSearch(event) {
    setQuery({ search: event.target.value });
    search(event.target.value, 10).then((data) => setsearchf(data));
  }
  console.log(searchF);

  function handleChange(event) {
    const id = event.target.id;
    const book = { id: event.target.id, shelf: event.target.value };
    const shelf = event.target.value;
    console.log(book);
    update(book, shelf).then((data) => {
      console.log(data.read, data);
     
      // firter by id
      const newAll = all.filter((book) => book.id !== id);
      // add the new book
      get(id).then((data) => {
        newAll.push(data);
        setAll(newAll);
      });
      
      
      
    });  // update the book shelf
  }

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
                onChange={handleSearch}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchF
                .map((book) => (
                  <Card
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.authors}
                    imageLinks={book.imageLinks.smallThumbnail}
                    shelf={book.shelf}
                    handleChange={handleChange}
                  />
                ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {all
                      .filter((book) => book.shelf === "currentlyReading")
                      .map((book) => (
                        <Card
                          key={book.id}
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          imageLinks={book.imageLinks.smallThumbnail}
                          shelf={book.shelf}
                          handleChange={handleChange}
                        />
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {all
                      .filter((book) => book.shelf === "wantToRead")
                      .map((book) => (
                        <Card
                          key={book.id}
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          imageLinks={book.imageLinks.smallThumbnail}
                          shelf={book.shelf}
                          handleChange={handleChange}
                        />
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {all
                      .filter((book) => book.shelf === "read")
                      .map((book) => (
                        <Card
                          key={book.id}
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          imageLinks={book.imageLinks.smallThumbnail}
                          shelf={book.shelf}
                          handleChange={handleChange}
                        />
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}> Add a book</a>
            {/* <Link to="/search"> Add a book </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
