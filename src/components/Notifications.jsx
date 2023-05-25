import { createPortal } from 'react-dom'
import { Toaster } from 'react-hot-toast'

export const Notifications = () => {
  return createPortal(
    <Toaster position='top-right' toastOptions={{
      style: {
        color: '#fdfdfd',
        background: '#11cc11',
      }
    }} />,
    document.body
  )
}
