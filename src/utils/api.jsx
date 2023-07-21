class Api {
    constructor({ url, headers }) {
        this._baseUrl = url;
        this._headers = headers;
    }

    _isResultOk(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    };

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(this._isResultOk)
    };

    setUserInfo({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        }).then(this._isResultOk)
    };

    setUserAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        }).then(this._isResultOk)
    };

    getCard() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(this._isResultOk)
    };


    createMesto(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        }).then(this._isResultOk)
    };

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._isResultOk)
    }

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        }).then(this._isResultOk)
    }

    dislikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._isResultOk)
    }

};

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
        authorization: '9ba3c65d-9fc0-499b-9856-0cae59cb26f0',
        'content-type': 'application/json',
    },
})

export default api;