import '../MyModal/MyModal.scss'

export default function MyModal({children, modalIsOpen, setModalIsOpen}) {
    return (
        <div className={modalIsOpen ? 'ModalWindow ModalActive' : 'ModalWindow'} onClick={() => setModalIsOpen(false)}>
            <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}