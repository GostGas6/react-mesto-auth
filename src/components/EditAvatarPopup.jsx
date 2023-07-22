import PopupWithForm from './PopupWithForm.jsx';
import { useEffect } from 'react';
import useValidate from '../utils/useValidate.jsx';


export default function EditAvatarPopup(
    {
        isOpen,
        onClose,
        onUpdate,
        processStatus
    }
) {
    const { values, handleChange, errors, isValid, resetForm, setValues } = useValidate()

    useEffect(() => {
        setValues({
            avatar: ''
        })
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault();
        onUpdate({
            avatar: values.avatar
        });
    }

    return (
        <PopupWithForm
            popupType={'update-avatar'}
            popupTitle={'Обновить аватар'}
            submitText={processStatus ? 'Обновление' : 'Обновить'}
            isOpen={isOpen}
            onClose={onClose}
            isValid={isValid}
            onSubmit={handleSubmit}
        >

            <div className="popup__input-section">
                <input id="userAvatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку"
                    required minLength="2" value={values.avatar || ''} onChange={handleChange} />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.avatar}
                </span>
            </div>
        </PopupWithForm>
    )
}