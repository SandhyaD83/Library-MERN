import { useState, useEffect } from 'react';
import './App.css';
import BookDisplay from './components/BookDisplay';
import Login from './components/Login';

function App() {
  const [books, setBooks] = useState([])
  const getBook = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books`)

      const data = await response.json();

      console.log(data)
      setBooks(data.books);

    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="App">
      <Login />
      <BookDisplay books={books} />
    </div>
  );
}

export default App;
