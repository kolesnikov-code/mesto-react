export default function ImagePopup() {
  return (
    <div className="popup popup_opacity-09" id="popup-view-full-image">
      <div className="popup__full-image-container">
        <img className="popup__full-image" id="popup-full-image" />
        <p className="popup__full-image-caption" />
        <button
          className="popup__button-close"
          id="popup-view-full-image-button-close"
          type="button"
        />
      </div>
    </div>
  );
}
