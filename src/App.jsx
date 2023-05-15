import { useState } from 'react'

import { Page1 } from './Page1'
import { Page2 } from './Page2'

function App() {
  const [page, setPage] = useState('3')

  const renderPage = () => {
    if (page === '1') {
      return <Page1 />
    }

    if (page === '2') {
      return <Page2 />
    }

    return <h1 color='aquamarine'>Двиантное поведение страницы</h1>
  }
  return (
    <>
      {renderPage()}

      <div style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <a onClick={(e) => { e.preventDefault(); setPage('1') }}>Марпшагаыпага</a>
        <a onClick={(e) => { e.preventDefault(); setPage('2') }}>Вынгирадро</a>
      </div>
    </>
  )
}

export default App
