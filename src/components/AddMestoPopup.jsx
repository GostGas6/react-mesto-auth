import PopupWithForm from './PopupWithForm.jsx';
import { useEffect, } from 'react';
import useValidate from '../utils/useValidate.jsx';

export default function AddMestoPopup({ isOpen, onClose, onSubmit, processStatus }) {
    const { values, handleChange, errors, isValid, resetForm, setValues } = useValidate()

    useEffect(() => {
        setValues({
            name: '',
            link: ''
        })
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            name: values.name,
            link: values.link
        });
    }

    return (
        <PopupWithForm
            popupType={'add-mesto'}
            popupTitle={'Новое место'}
            submitText={processStatus ? 'Сохранение' : 'Создать'}
            isOpen={isOpen}
            isValid={isValid}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="popup__input-section">
                <input placeholder="Название" className="popup__input" type="text" name="name" id="popup_place"
                    minLength="2" maxLength="40" required
                    value={values.name || ''} onChange={handleChange} />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.name}
                </span>
            </div>
            <div className="popup__input-section">
                <input placeholder="Ссылка на картинку" className="popup__input" type="url" name="link" id="popup_link"
                    minLength="2" maxLength="200" required
                    value={values.link || ''} onChange={handleChange} />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.link}
                </span>
            </div>

        </PopupWithForm>
    )
}