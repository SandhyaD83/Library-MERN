import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, Link } from "react-router-dom"
import BookDisplay from './components/BookDisplay';
import Author from './components/Author';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [books, setBooks] = useState([])
  const [login, setLogin] = useState(true)
  const [user, setUser] = useState('')
  const getBook = async (name) => {
    try {
      const response = await fetch(`http://localhost:3000/books`)

      const data = await response.json();
      console.log(name)
      console.log(data)
      setBooks(data.books);
      setLogin(false)
      setUser(name)


    }
    catch (error) {
      console.error(error)
    }
  }
  const [author, setAuthor] = useState('')
  const getAuthor = async (author) => {
    console.log(author)
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`)
      const data = await response.json();
      setAuthor(data.items)
      console.log(data.items)
    }
    catch (err) {
      console.error(err)
    }
  }
  // useEffect(() => {
  //   getBook();
  // }, []);

  console.log(author)
  return (
    <div className="App">
      <Header />
      {login ? <Login onClick={getBook} /> : <BookDisplay books={books} user={user} getAuthor={getAuthor} />}
      {author ? <Author author={author} /> : null}



    </div>


  );
}

export default App;
