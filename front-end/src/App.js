import { useState, useEffect } from 'react';
import './App.css';

import BookDisplay from './components/BookDisplay';
import Author from './components/Author';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Book from './components/Book'
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
  const [author, setAuthor] = useState([])
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

  const getUser = async (login) => {
    try {
      const response = await fetch(`http://localhost:3000/users`)
      const data = await response.json()
      const name = login.split(' ')[0]
      const pwd = login.split(' ')[1]
      const result = data.users.find(user => user.name === name && user.password === pwd)
      console.log(data)
      console.log(pwd)
      if (result) {
        getBook(name)
      }
      else {
        alert('User name or Password incorrect');
      }

    }
    catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getUser();
  });
  const [book, setBook] = useState('')
  const searchBook = async (search) => {
    try {

      const response = await fetch(`http://localhost:3000/books/${search}`)

      const data = await response.json();

      console.log(data)
      setBook(data);

    }
    catch (error) {
      console.error(error)
    }
  }
  console.log(author)
  return (
    <div className="App">
      <Header />


      {login ? <Register /> : null}
      {login ? <Login onLogin={getUser} /> : <BookDisplay books={books} user={user} getAuthor={getAuthor} searchBook={searchBook} />}
      {book ? <Book book={book} /> : null}
      {author.length > 0 ? <Author author={author} /> : null}

    </div>


  );
}

export default App;
