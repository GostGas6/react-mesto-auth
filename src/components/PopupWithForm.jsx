import useCloseOnEsc from '../utils/useCloseOnEsc.jsx';

export default function PopupWithForm({
    popupType,
    popupTitle,
    submitText,
    children,
    isOpen,
    isValid,
    onClose,
    onSubmit,
}) {

    useCloseOnEsc({ isOpen, onClose })

    function handleCloseOnOverlay(event) {
        if (event.target.classList.contains('popup_opened')) {
            return onClose()
        }
    }

    return (
        <div
            className={
                `popup popup_type_${popupType} 
        ${isOpen && 'popup_opened'}`
            } id="updateAvatar" onClick={handleCloseOnOverlay}>
            <div className="popup__container">
                <form name={popupType} autoComplete="off" className="popup__form" noValidate onSubmit={onSubmit}>
                    <button onClick={onClose} className="popup__close-button" type="button" aria-label="Close popup"></button>
                    <h2 className="popup__title">{popupTitle}</h2>
                    {children}
                    <button className={
                        `popup__button-save 
               ${isValid ? '' : 'popup__button-save_inactive'}`
                    } type="submit">{submitText}</button>
                </form>
            </div>
        </div>

    )
}