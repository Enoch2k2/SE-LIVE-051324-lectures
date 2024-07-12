import React from 'react'
import BookCard from './BookCard'

const BookList = ({ books }) => {
  const bookCards = books.map(book => <BookCard key={book.id} book={book} />)
  return (
    <div>
      <h1>Book List</h1>
      { bookCards }
    </div>
  )
}

export default BookList