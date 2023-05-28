import './Modal.css'

export const Modal = ({ onClose, children }) => {
  return (
    <div className='modal'>
      {children}
    </div>
  )
}
