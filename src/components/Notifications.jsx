import { createPortal } from 'react-dom'
import { ToastBar, Toaster, toast } from 'react-hot-toast'

import './Notifications.css'

export const Notifications = () => {
  return createPortal(
    <Toaster position='top-right' toastOptions={{
      style: {
        color: '#fdfdfd',
        background: '#11cc11',
      },
      className: 'toast'
    }}>
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div onClick={() => toast.dismiss(t.id)}>
              {icon}
              {message}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>,
    document.body
  )
}
