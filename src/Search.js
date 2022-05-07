import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll, get, update, search } from "./BooksAPI";
import Card from "./Card";





function Search() {
  const [showSearchPage, setShowSearchpage] = useState(true);
  const [query, setQuery] = useState("");
  const [searchF, setsearchf] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    getAll().then((data) => setAll(data));
  }, []);

  function handleSearch(event) {
    setQuery({ search: event.target.value });
    if (event.target.value.length === 1) {
      search(event.target.value).then((data) => setsearchf(data));
    } 
  }
  

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
        <div className="search-books">
          <div className="search-books-bar">
            {/* <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a> */}
            <Link to="/" className="close-search"> Home </Link>
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
                    imageLinks={book.imageLinks ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=eJa41LzeWWkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}
                    // if imageLinks is not available, use the thumbnail
                    
                    shelf={book.shelf}
                    search={true}
                    handleChange={handleChange}
                  />
                ))}
            </ol>
          </div>
        </div>
    </div>
  );
}

export default Search;
