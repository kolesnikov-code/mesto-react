export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_opacity-09 ${isOpen && 'popup_opened'}`}
      id="popup-view-full-image"
    >
      <div className="popup__full-image-container">
        <img className="popup__full-image" id="popup-full-image" src={card.link} alt={card.name} />
        <p className="popup__full-image-caption">{card.name}</p>
        <button
          className="popup__button-close"
          id="popup-view-full-image-button-close"
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
