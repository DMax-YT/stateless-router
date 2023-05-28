import { useState } from 'react'

import {
  Page1,
  Page2,
  Page3
} from './pages'

import { Notifications } from './components/Notifications'
import { WiseButton } from './components/WiseButton'
import { Navbar } from './components/Navbar'

function App() {
  const [page, setPage] = useState('-1')

  const CurrentPage = () => {
    if (page === '1') {
      return <Page1 />
    }

    if (page === '2') {
      return <Page2 />
    }

    if (page === '3') {
      return <Page3 />
    }

    return <h1 color='aquamarine'>Девиантное поведение страницы</h1>
  }

  return (
    <>
      <Notifications />
      <CurrentPage />

      <Navbar>
        <a onClick={(e) => { e.preventDefault(); setPage('1') }}>Марпшагаыпага</a>
        <a onClick={(e) => { e.preventDefault(); setPage('2') }}>Вынгирадро</a>
        <a onClick={(e) => { e.preventDefault(); setPage('3') }}>Portal 3</a>

        <WiseButton />
      </Navbar>
    </>
  )
}

export default App
