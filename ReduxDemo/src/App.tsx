import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserDetails } from './components/UserDetails'
import { SignTransaction } from './components/SignTransaction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <UserDetails/> */}
      <SignTransaction />
    </div>
  )
}

export default App
