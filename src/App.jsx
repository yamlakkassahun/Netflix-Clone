import { useState } from 'react'
import './App.css'
import HomeScreen from './screens/home/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/home' element={<HomeScreen />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
