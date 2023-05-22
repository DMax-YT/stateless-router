import { useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ onClose }) => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' }}>
      <button onClick={onClose}>
        Бесполезная кнопка, закрывающая сие чудо инженерной мысли, 
        поакзывающее все проблемы создания порталов и их использования в React приложениях
        на наглядном примере, который безо всяких ошибок демонстрирует правильное применение данной техники
      </button>
    </div>
  )
}

export const Page3 = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal((opened) => !opened)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <div style={{
        background: 'linear-gradient(77.81deg, rgb(247 26 26 / 80%) 0%, rgb(80 53 255 / 80%) 100%)',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
        fontSize: '5em',
        fontWeight: '800'
      }} onClick={toggleModal}>
        Тогуглер
      </div>

      {openModal && createPortal(
        <Modal onClose={closeModal} />,
        document.body
      )}
    </>
  )
}
