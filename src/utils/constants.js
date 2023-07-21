export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error_active',
    errorText: '.popup__error',
    errorClosestParent: '.popup__input-section'
};

export const elementTemplateOptions = {
    containerSelector: '.elements',
    templateSelector: 'element_template',
    elementSelector: '.element',
    elementTextSelector: '.element__title',
    deleteBtnSelector: '.element__del-button',
    likeBtnSelector: '.element__like-button',
    imgSelector: '.element__image',
    likeBtnClass: 'element_like-active',
    counterSelector: '.element__like-counter'
};

export const profileSelectors = {
    avatarSelector: '.profile__avatar',
    nameSelector: '.profile__title',
    aboutSelector: '.profile__subtitle',
    buttonEditSelector: '.profile__edit-button',
    buttonAddSelector: '.profile__add-button',
    buttonAvatarSelector: '.profile__avatar-overlay',
};

export const popupSelector = {
    editProfile: '#popup_edit',
    addCard: '#popup-add',
    imagePopup: '.popup-image',
    changeAvatar: '#popup-change-avatar',
    confirmDelete: '#popup-confirm-delete',
}

export const formSelectors = {
    formProfile: "profile-form",
    formAdd: "profile-form",
    formAvatar: "form-change-avatar",
    submit: '.popup__button-save'
}