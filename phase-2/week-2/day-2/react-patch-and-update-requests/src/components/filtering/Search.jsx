import {useState} from 'react'

const Search = ({ setTerm, term }) => {

  function handleChange(e) {
    setTerm(e.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" name="search" id="search" value={term} onChange={ handleChange } />
    </div>
  )
}

export default Search