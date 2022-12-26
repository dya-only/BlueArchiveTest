import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import PickUp from './pages/PickUp'
import Gacha from './pages/Gacha'
// import NavBar from './components/NavBar'

function App() {

  return (
    <Routes>
      <Route path="/pickup" element={<PickUp />} />
      <Route path="/gacha" element={<Gacha />} />
    </Routes>
  )
}

export default App