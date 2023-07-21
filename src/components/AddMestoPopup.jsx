import PopupWithForm from './PopupWithForm.jsx';
import { useEffect, useState } from 'react';

export default function AddMestoPopup({ isOpen, onClose, onSubmit, processStatus }) {
    const [name, setName] = useState('')
    const [link, setLink] = useState('#')

    useEffect(() => {
        setName('');
        setLink('')
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            name: name,
            link: link
        })
    }

    return (
        <PopupWithForm
            popupType={'add-mesto'}
            popupTitle={'Новое место'}
            submitText={processStatus ? 'Сохранение' : 'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="popup__input-section">
                <input placeholder="Название" className="popup__input" type="text" name="name" id="popup_place"
                    minLength="2" maxLength="40" required
                    value={name || ''} onChange={(event) => setName(event.target.value)} />
                <span className="popup__error"></span>
            </div>
            <div className="popup__input-section">
                <input placeholder="Ссылка на картинку" className="popup__input" type="url" name="link" id="popup_link"
                    minLength="2" maxLength="200" required
                    value={link || ''} onChange={(event) => setLink(event.target.value)}/>
                <span className="popup__error"></span>
            </div>  

        </PopupWithForm>
    )
}