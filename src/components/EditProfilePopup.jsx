import PopupWithForm from './PopupWithForm.jsx';
import { CurrentUserContext } from '../context/CurrentUserContext.jsx';
import { useContext, useEffect } from 'react';
import useValidate from '../utils/useValidate.jsx';

export default function EditProfilePopup(
    {
        isOpen,
        onClose,
        onUpdate,
        processStatus
    }) {
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, resetForm, setValues } = useValidate()

    useEffect(() => {
        setValues(
            currentUser
                ? { name: currentUser.name, job: currentUser.about }
                : { name: '', job: '' }
        );
        if (!isOpen) {
            resetForm();
        }
    }, [currentUser, isOpen]);

    function handleSubmit(event) {
        event.preventDefault();
        onUpdate({
            name: values.name,
            about: values.job
        });
    }

    return (
        <PopupWithForm
            popupType={'edit-profile'}
            popupTitle={'Редактировать профиль'}
            submitText={processStatus ? 'Сохранение' : 'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            isValid={isValid}
            onSubmit={handleSubmit}
        >

            <div className="popup__input-section">
                <input placeholder="Введите имя" className="popup__input" type="text" name="name" id="popup_name"
                    minLength="2" maxLength="40" required value={values.name || ''}
                    onChange={handleChange} />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.name}
                </span>
            </div>
            <div className="popup__input-section">
                <input placeholder="О себе" className="popup__input" type="text" name="job" id="popup_about"
                    minLength="2" maxLength="200" required value={values.job || ''}
                    onChange={handleChange} />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.job}
                </span>
            </div>
        </PopupWithForm>
    )
}