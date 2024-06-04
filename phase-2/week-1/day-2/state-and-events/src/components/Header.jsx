
const Header = ({ name, age, handleNameChange, color }) => {
  return <h1 onClick={handleNameChange} style={{color: color}}>Hello { name }! You are { age } years old!</h1>
}

export default Header