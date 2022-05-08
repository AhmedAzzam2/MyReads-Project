import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll, get, update } from "./BooksAPI";
import Card from "./Card";
import { shelves } from "./Card";


shelves.map((shelf) => {
  console.log(shelf);
}
);
function App() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    getAll().then((data) => setAll(data));
  }, []);


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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              // shelves.map identifies the shelves and maps them to the cards
              shelves.filter((shelf) => { return shelf.shelfName != "None"; }) // filter out the none shelf
              .map((shelf) => {
                return (

                  <div className="bookshelf" key={shelf.shelfName}>
                    <h2 className="bookshelf-title"> {shelf.shelfName}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {all.map((book) => {
                          if (book.shelf === shelf.id) {
                            return (
                              <li key={book.id}>
                                <Card
                                  id={book.title}
                                  title={book.title}
                                  author={book.authors}
                                  imageLinks={book.imageLinks ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=eJa41LzeWWkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}
                                  handleChange={handleChange}
                                  shelf={book.shelf}
                                />
                              </li>
                            );
                          }
                        })}
                      </ol>
                    </div>
                  </div>
                );
              })

            }

          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
