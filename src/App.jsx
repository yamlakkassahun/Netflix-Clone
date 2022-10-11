import { useState } from 'react'
import HomeScreen from './screens/home/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomeScreen/>
  )
}

export default App
