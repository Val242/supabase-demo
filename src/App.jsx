import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Welcome to Supabase Intro
     <p><Link to='/register'>Register</Link></p> 
       <p><Link to='/login'>Login</Link></p>
    </h1>
    </>
  )
}

export default App
