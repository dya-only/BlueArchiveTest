import { Fragment, useState } from 'react'
import './App.css'

import PickUp from './views/PickUp'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <NavBar />
      <PickUp />
    </Fragment>
  )
}

export default App