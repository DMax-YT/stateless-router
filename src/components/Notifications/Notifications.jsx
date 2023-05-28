import { createPortal } from 'react-dom'
import { Toaster, toast, resolveValue } from 'react-hot-toast'

import './Notifications.css'

export const Notifications = () => {
  return createPortal(
    <Toaster position='top-right' toastOptions={{ className: 'toast' }}>
      {(t) => {
        const animation = t.visible ? 'toast-in' : 'toast-out'
        const toastClass = `toast ${animation}`

        return (
          <div className={toastClass} onClick={() => toast.dismiss(t.id)}>
            {resolveValue(t.message, t)}
          </div>
        )
      }}
    </Toaster>,

    document.body
  )
}
