import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import About from './pages/about/About.jsx'


// const router =createBrowserRouter ([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement: <NotFound/>
//   },
//   {
//     path: "about",
//     element: <About/>,

//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <RouterProvider router={router}/> */}
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  </React.StrictMode>,
)
