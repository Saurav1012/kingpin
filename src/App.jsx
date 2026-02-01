import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './modules/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#427ef5] h-screen flex justify-center items-center">
    
      <Form/>
      
    </div>
    </>
  )
}

export default App
