import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <h1>People invited to our party!</h1>
    </div>
  )
}

export default App
