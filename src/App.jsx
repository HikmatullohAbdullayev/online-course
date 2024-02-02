import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import MainLayout from './layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <h1>App</h1> */}
   <div className=" mx-auto container px-5 ">
   <MainLayout/>
   </div>
   </>
  )
}

export default App
