import React from 'react'
import {Routes , Route} from "react-router"
import HomePage from "./pages/HomePage.jsx"
const App = () => {
  return (
    
    <div className='relative h-full w-full'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
