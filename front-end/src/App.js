import { useState, useEffect } from 'react';
import './App.css';

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
      const response = await fetch(`http://localhost:3000/books/users`)
      const data = await response.json()
      const name = login.split(' ')[0]
      const pwd = login.split(' ')[1]
      const result = data.users.find(user => user.name === name && user.password === pwd)
      console.log(data)
      console.log(pwd)
      if (result) {
        getBook(name)
      }


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
      {login ? <Login onClick={getUser} /> : <BookDisplay books={books} user={user} getAuthor={getAuthor} />}
      {author ? <Author author={author} /> : null}



    </div>


  );
}

export default App;
