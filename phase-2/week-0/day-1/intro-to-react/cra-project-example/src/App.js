import { useState } from 'react'
import Navbar from './Navbar'
import Login from './Login'

function App() {
  const [color, setColor] = useState('blue')

  const handleClick = () => {
    color == "blue" ? setColor("red") : setColor("blue")
  }

  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
