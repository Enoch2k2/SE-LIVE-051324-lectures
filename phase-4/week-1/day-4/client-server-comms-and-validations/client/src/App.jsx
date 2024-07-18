import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/navigation/Nav";
import Home from "./components/static/Home";
import BookList from "./components/books/BookList";
import BookForm from "./components/books/BookForm";
import { BookProvider } from "./context/BookContext";

function App() {

  return (
    <Router>
      <BookProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/new" element={<BookForm />} />
        </Routes>
      </BookProvider>
    </Router>
  )
}

export default App
