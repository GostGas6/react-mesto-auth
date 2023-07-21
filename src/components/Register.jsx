import Auth from './Auth.jsx';
import useValidate from '../utils/useValidate.jsx';
import { Link } from 'react-router-dom';

export default function Register(
    {
        onRegistration,
        title,
        buttonTitle,
        isLoading
    }
) {
    const { values, handleChange, errors, isValid, resetForm } = useValidate()

    function handleSubmit() {
        onRegistration(values.email, values.password)
    }

    return (
        <Auth
            onSubmit={handleSubmit}
            title={title}
            buttonTitle={buttonTitle}
            isValid={isValid}
            isLoading={isLoading}
            tip={tip}
        >
            <label className="popup__input-section">
                <input
                    className="popup__input popup__input_type_auth"
                    id="registerEmail"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email || ''}
                    required={true}
                    onChange={handleChange}
                />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.email}
                </span>
            </label>
            <label className="popup__input-section">
                <input
                    className="popup__input popup__input_type_auth"
                    id="registerPassword"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={values.password || ''}
                    required={true}
                    onChange={handleChange}
                />
                <span
                    className={`popup__error ${isValid ? '' : 'popup__error_active'}`}
                >
                    {errors.password}
                </span>
            </label>
            <p className={'auth__tip'}>
                Уже зарегистрированы?&nbsp;
                <Link
                    className='auth__link'
                    to='/sign-in'
                >
                    Войти
                </Link>
            </p>
        </Auth>
    )
}