import { useState } from 'react'
import { createPortal } from 'react-dom'

import './Page3.css'

const Modal = ({ onClose }) => {
  return (
    <div className='modal'>
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
      <div className='toggler' onClick={toggleModal}>
        Тогуглер
      </div>

      {openModal && createPortal(
        <Modal onClose={closeModal} />,
        document.body
      )}
    </>
  )
}
