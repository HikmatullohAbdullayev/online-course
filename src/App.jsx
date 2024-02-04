import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import MainLayout from './layout/MainLayout'
import { BurgerContext } from './assets/context/BurgerContext'

function App() {
  const [open, setOpen] = useState(false);

  return (
   <>
   <div >
   <BurgerContext.Provider value={{open,setOpen}}>
   <MainLayout/>

   </BurgerContext.Provider>
   </div>
   </>
  )
}

export default App
