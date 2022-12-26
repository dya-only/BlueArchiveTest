import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import PickUp from './pages/PickUp'
import Main from './pages/Main'
// import NavBar from './components/NavBar'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pickup" element={<PickUp />} />
    </Routes>
  )
}

export default App