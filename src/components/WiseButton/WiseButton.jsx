import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { getPhrase } from 'services/WisePhrase.service'
import './WiseButton.css'

export const WiseButton = () => {
  const [phrase, setPhrase] = useState(getPhrase)

  const showThoughts = (e) => {
    toast(phrase?.alert ?? 'Кризис идей')

    if (phrase) {
      setPhrase(getPhrase())
    }
  }

  return (
    <button className='wise-button' onClick={showThoughts}>
      {phrase?.button ?? 'Пока без умных мыслей'}
    </button>
  )
}
