import React from 'react';

export default function Auth(
    {
        onSubmit,
        title,
        buttonTitle,
        tip,
        isValid,
        isLoading,
        children,
    }
) {

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit()
    }

    function getFormFieldsByType(type) {
        return React.Children.map(children, (child => {
            if (child.type === type) return child;
            return null;
        }))
    }

    return (
        <div className='auth'>
            <div className='auth__container'>
                <form
                    className='popup popup_type_auth'
                    onSubmit={handleSubmit}
                >
                    <h2 className='popup__title popup__title_type_auth'>{title}</h2>
                    {
                        getFormFieldsByType('label')
                    }
                    <button className={`popup__button-save popup__submit-button ${isValid ? '' : 'popup__button-save_inactive'}`}
                        disabled={!isValid}>
                        {isLoading
                            ? 'Подождите...'
                            : buttonTitle}
                    </button>
                    {
                        getFormFieldsByType('p')
                    }
                </form>
            </div>
        </div>
    )
}