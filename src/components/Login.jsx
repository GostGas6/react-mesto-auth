import Auth from './Auth.jsx';
import useValidate from '../utils/useValidate.jsx';

export default function Login(
    {
        onLogin,
        title,
        buttonTitle,
        isLoading
    }
) {
    const { values, handleChange, errors, isValid } = useValidate()

    function handleSubmit() {
        onLogin(values.email, values.password)
    }

    return (
        <Auth
            onSubmit={handleSubmit}
            title={title}
            buttonTitle={buttonTitle}
            isValid={isValid}
            isLoading={isLoading}
        >
            <label className="popup__input-section">
                <input
                    className="popup__input popup__input_type_auth"
                    id="loginEmail"
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
                    id="loginPassword"
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
        </Auth>
    )
}