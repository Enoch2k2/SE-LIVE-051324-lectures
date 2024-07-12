import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { baseUrl } from './Globals'
import Home from './components/static/Home'
import BookList from './components/books/BookList'
import Navbar from './components/static/Navbar'

function App() {

  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    async function load() {
      const bookResp = await fetch(baseUrl + "/api/books")
      const booksData = await bookResp.json()
      setBooks(booksData)
      const authorResp = await fetch(baseUrl + "/api/authors")
      const authorsData = await authorResp.json()
      setAuthors(authorsData)
    }

    load()
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList books={books} />} />
      </Routes>
    </Router>
  )
}

export default App
