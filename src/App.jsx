import './App.css'

import { Route, Routes } from 'react-router-dom'

// import Footer from './Components/Footer'
// import HomeLayout from './layouts/HomeLayouts'
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
    <Routes>
      <Route path = "/"  element ={<HomePage />}> </Route>
   </Routes> 
    </>
  )
}

export default App
