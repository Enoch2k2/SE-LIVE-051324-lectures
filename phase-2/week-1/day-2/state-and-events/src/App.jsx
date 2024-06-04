import BlueParagraph from './StyledComponents/BlueParagraph'
import Header from './components/Header'
import { baseUrl, headers } from './globals'
import { useEffect } from 'react'

function App() {
  
  useEffect(() => {
    console.log('a')
  }, [])
  
  return (
    <div>
      <Header name="Bob" age={32} />
      <Header name="Sam" age={23} />
      <BlueParagraph>
        Here's a p tag!
      </BlueParagraph>
      <BlueParagraph>
        Here's another p tag!
      </BlueParagraph>
      <BlueParagraph>
        Here's another blue p tag!
      </BlueParagraph>
    </div>
  )
}

export default App