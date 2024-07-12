import React from 'react'

const BookCard = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>By: {book.author.name}</p>
    </div>
  )
}

export default BookCard