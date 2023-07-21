import PopupWithForm from './PopupWithForm.jsx';
import { useEffect, useRef } from 'react';


export default function EditAvatarPopup({ isOpen, onClose, onUpdate, processStatus }) {
    const avatar = useRef('#');

    useEffect(() => {
        avatar.current.value = ''
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault();
        onUpdate({
            avatar: avatar.current.value
        })
    }

    return (
        <PopupWithForm
            popupType={'update-avatar'}
            popupTitle={'Обновить аватар'}
            submitText={processStatus ? 'Обновление' :'Обновить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >

            <div className="popup__input-section">
                <input id="avatar-link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку"
                    required minLength="2" ref={avatar}/>
                <span className="popup__error popup__error_active"></span>
            </div>

        </PopupWithForm>
    )
}