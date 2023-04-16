import { useState, useEffect } from 'react';
import './App.css';
import BookDisplay from './components/BookDisplay';
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

  // useEffect(() => {
  //   getBook();
  // }, []);


  return (
    <div className="App">
      {login ? <Login onClick={getBook} /> : <h3>{user}</h3>}
      <BookDisplay books={books} />
    </div>
  );
}

export default App;
