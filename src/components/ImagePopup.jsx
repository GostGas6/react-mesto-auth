import useCloseOnEsc from '../utils/useCloseOnEsc.jsx';

export default function ImagePopup({
    popupType,
    card,
    onClose
}) {
    let isOpen = !!card
    useCloseOnEsc({ isOpen, onClose })

    function handleClose(event) {
        if (event.target.classList.contains('popup_opened')
            || event.target.classList.contains('popup__close-button')) {
            return onClose()
        }
    }

    return (
        <div className={`popup popup-image ${isOpen ? 'popup_opened' : ''}`
        } id="popup_image" onClick={handleClose}>
            <div className="popup__container-image">
                <button onClick={handleClose} aria-label="Close image" className="popup__close-button" id="popup_close-image" type="button"></button>
                <img className="popup__image" src={isOpen ? card.link : '#'} alt={isOpen ? card.name : ' '} />
                <h2 className="popup__text">{isOpen ? card.name : ' '}</h2>
            </div>
        </div>
    )
}