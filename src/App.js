import MainPage from './MainPage.js';
import "./App.css";
import { update } from "./BooksAPI";

export function handleChange(event) {
  const book = {id:event.target.id, shelf:event.target.value};
  const shelf = event.target.value;
  update(book, shelf).then((data) => {
    console.log(data);
  });  // update the book shelf
}

function App() {
  return (
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;