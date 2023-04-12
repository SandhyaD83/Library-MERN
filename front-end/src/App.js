import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState([])
  const getBook = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books`)

      const data = await response.json();

      console.log(data)
      setBook(data);

    }
    catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getBook();
  }, []);
  return (
    <div className="App">
      {book}
    </div>
  );
}

export default App;
