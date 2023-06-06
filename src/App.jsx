import { useLayoutEffect, useState } from 'react'

import {
  Page1,
  Page2,
  Page3
} from 'pages'

import {
  Navbar,
  Notifications,
  ThemeSwitcher,
  WiseButton
} from 'components'

import { useTheme } from 'context'

function App() {
  const [page, setPage] = useState('-1')
  const { theme } = useTheme()

  useLayoutEffect(() => {
    if (theme === 'auto') {
      document.body.classList.remove('dark', 'light')
    }

    if (theme === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }

    if (theme === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [theme])

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
      <Navbar>
        <a onClick={(e) => { e.preventDefault(); setPage('1') }}>Марпшагаыпага</a>
        <a onClick={(e) => { e.preventDefault(); setPage('2') }}>Вынгирадро</a>
        <a onClick={(e) => { e.preventDefault(); setPage('3') }}>Portal 3</a>

        <WiseButton />
        <ThemeSwitcher />
      </Navbar>

      <Notifications />
      <CurrentPage />
    </>
  )
}

export default App
