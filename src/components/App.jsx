import '../pages/index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ImagePopup from './ImagePopup.jsx';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Api from '../utils/api.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import AddMestoPopup from './AddMestoPopup.jsx';
import ConfirmMestoDeletePopup from './ConfirmMestoDeletePopup.jsx';

function App() {
  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddMestoPopupOpen, setIsAddMestoPopupOpen] = useState(false);
  const [isDeleteMestoPopupOpen, setIsDeleteMestoPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [user, setUser] = useState(null);
  const [initialCards, setInitialCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  useEffect(() => {
    Promise.all([Api.getUserInfo(), Api.getCard()])
      .then(([userInfo, cards]) => {
        setUser(userInfo);
        setInitialCards(cards);
      })
      .catch(console.log)
  }, [])

  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddMestoPopupOpen(false);
    setIsDeleteMestoPopupOpen(false);
    setSelectedCard(null)
  }

  function handleUpdateAvatarPopup() {
    setIsUpdateAvatarPopupOpen(true)
  }

  function handleEditProfilePopup() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddMestoPopup() {
    setIsAddMestoPopupOpen(true)
  }

  function handleLikeClick(card) {
    Api.likeCard(card._id)
      .then((newCard) => {
        setInitialCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(console.log)
  }

  function handleDislikeClick(card) {
    Api.dislikeCard(card._id)
      .then((newCard) => {
        setInitialCards((state) => state.map(c => c._id === card._id ? newCard : c))
      })
      .catch(console.log)
  }

  function handleDeleteConfirm(card) {
    setCardToDelete(card);
    setIsDeleteMestoPopupOpen(true)
  }

  function handleDeleteMesto(card) {
    setIsLoading(true)
    Api.deleteCard(card._id)
      .then(() => {
        setInitialCards((state) => state.filter(c => c._id !== (card._id)));
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }

  function handleProfileUpdate(info) {
    setIsLoading(true)
    Api.setUserInfo(info)
      .then(userInfo => {
        setUser(userInfo);
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }

  function handleAvatarUpdate(info) {
    setIsLoading(true)
    Api.setUserAvatar(info)
      .then(avatar => {
        setUser(avatar);
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }

  function handleMestoAdd(data) {
    setIsLoading(true)
    Api.createMesto(data)
      .then((card) => {
        setInitialCards([card, ...initialCards]);
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }

  return (
    <CurrentUserContext.Provider value={user}>
      <Header />
      <Main
        onUserAvatarEdit={handleUpdateAvatarPopup}
        onUserProfileEdit={handleEditProfilePopup}
        onMestoAdd={handleAddMestoPopup}
        onMestoDelete={handleDeleteConfirm}
        onMestoShow={setSelectedCard}
        onMestoLike={handleLikeClick}
        onMestoDislike={handleDislikeClick}
        cards={initialCards}
      />
      <Footer />
      <EditAvatarPopup
        isOpen={isUpdateAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdate={handleAvatarUpdate}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdate={handleProfileUpdate}
      />

      <AddMestoPopup
        isOpen={isAddMestoPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleMestoAdd}
        processStatus={isLoading}
      />

      <ConfirmMestoDeletePopup
        isOpen={isDeleteMestoPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleDeleteMesto}
        card={cardToDelete}
        processStatus={isLoading}
      />

      <ImagePopup
        popupType={'popup_image '}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
