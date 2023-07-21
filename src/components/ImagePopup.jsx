import useCloseOnEsc from '../utils/useCloseOnEsc.jsx';

export default function ImagePopup({
    popupType,
    card,
    onClose
}) {
    let isOpen = !!card
    useCloseOnEsc({ isOpen, onClose })

    function handleCloseOnOverlay(event) {
        if (event.target.classList.contains('popup_opened')) {
            return onClose()
        }
    }

    return (
        <div className={`popup popup-image ${isOpen ? 'popup_opened' : ''}`
        } id="popup_image" onClick={handleCloseOnOverlay}>
            <div className="popup__container-image">
                <button onClick={onClose} aria-label="Close image" className="popup__close-button" id="popup_close-image" type="button"></button>
                <img className="popup__image" src={isOpen ? card.link : '#'} alt={isOpen ? card.name : ' '} />
                <h2 className="popup__text">{isOpen ? card.name : ' '}</h2>
            </div>
        </div>
    )
}