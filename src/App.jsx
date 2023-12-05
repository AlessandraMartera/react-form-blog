import { useState } from 'react'
import './styles/App.css'
import TheForm from './components/TheForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <h1>
        SHOP NATALIZIO
      </h1>
    <TheForm/>
    </main>
  
    </>
  )
}

export default App
