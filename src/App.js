import MainPage from './MainPage.js';
import "./App.css";
import { useState, useEffect } from "react";
import { getAll, get, update, search } from "./BooksAPI";
import Card from "./Card";

export function handleChange(event) {
  const id = event.target.id;
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