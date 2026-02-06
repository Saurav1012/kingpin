import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './modules/Form'
import Dashboard from './modules/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#B7DFE8] h-screen flex justify-center items-center">
    
    
      {/* <Form/> */}
      <Dashboard/>
      
    </div>
    </>
  )
}

export default App
