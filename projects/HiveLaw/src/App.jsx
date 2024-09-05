import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/tailwind.css'
import Login from './Pages/login.jsx' 
import SignUp from './Pages/signUp.jsx'
import CurriculumV from './Pages/cv.jsx'
import Pages from './utilities/Pages.js'
function App() {
  return (
    <div className="bg-blue-700 h-screen">
      <Router>
        <Routes>
          <Route path={Pages.SIGNUP} element={<SignUp />} />
          {/* <Route path ="/" element={<Login />} /> */}
          <Route path={Pages.CURRICULUMV} element={<CurriculumV />} />

          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
