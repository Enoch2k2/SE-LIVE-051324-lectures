import {useState} from 'react'

const Search = ({ searchTerm }) => {
  const [term, setTerm] = useState("")

  function handleChange(e) {
    setTerm(e.target.value)
    searchTerm(e.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" name="search" id="search" value={term} onChange={ handleChange } />
    </div>
  )
}

export default Search