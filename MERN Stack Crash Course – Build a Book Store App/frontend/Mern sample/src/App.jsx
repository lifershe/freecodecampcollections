import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:5555/books')
      .then(response => console.log(response)
    )
  }, [])

  return (
    <div>
      <h1>A simple Cors policy</h1>
    </div>
  )
}

export default App
