import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from 'components'

import './Page3.css'

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
        <Modal onClose={closeModal}>
          <button onClick={closeModal}>
            Бесполезная кнопка, закрывающая сие чудо инженерной мысли,
            поакзывающее все проблемы создания порталов и их использования в React приложениях
            на наглядном примере, который безо всяких ошибок демонстрирует правильное применение данной техники
          </button>
        </Modal>,

        document.body
      )}
    </>
  )
}
