import { CurrentUserContext } from '../context/CurrentUserContext.jsx';
import { useContext } from 'react';


export default function Card({
    card,
    onDelete,
    onShow,
    onLike,
    onDislike
}) {

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    function handleCardDelete() {
        onDelete(card)
    }

    function handleCardClick() {
        onShow(card)
    }

    function handleLikeButtonClick() {
        if (isLiked) {
            onDislike(card)
        } else {
            onLike(card)
        }
    }

    return (

        <div className="element">
            {isOwn && <button onClick={handleCardDelete} aria-label="Delete card"
                className="element__del-button" type="button"/>}
            <img id="image-element"
                className="element__image"
                src={card.link ?? '#'}
                alt={card.name ?? ' '}
                onClick={handleCardClick} />
            <div className="element__container">
                <h2 id="element-name" className="element__title">{card.name ?? ' '}</h2>
                <div className="element__like-container">
                    <button onClick={handleLikeButtonClick} aria-label="Like"
                        className={`element__like-button ${isLiked && 'element__like-button_active'}`}
                        id="like" type="button"/>
                    <span className="element__like-counter">{card.likes.length ?? 0}</span>
                </div>
            </div>
        </div>

    )
}
