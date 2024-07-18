import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">List Books</Link></li>
      <li><Link to="/books/new">Create Book</Link></li>
    </ul>
  )
}

export default Nav