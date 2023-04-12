import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState([])
  const getBook = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books`)

      const data = await response.json();

      console.log(data)
      setBook(data.allBooks);

    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getBook();
  }, []);
  const books = book.map((b) => {
    return (
      <div>
        <h1>{b.name}</h1>
        <h2>{b.author}</h2>
        <img src={b.image} alt={b.name} />
        <h2>{b.price}</h2>
        <hr />
      </div>
    )
  })
  return (
    <div className="App">
      {books}
    </div>
  );
}

export default App;
