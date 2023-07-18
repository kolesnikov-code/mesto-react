export default function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container-${name}`} id={`popup-container-${name}`}>
        <form className="form" name={name} noValidate="">
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="form__button-save" id={`${name}-button-save`} type="submit">
            {buttonText || 'Сохранить'}
          </button>
          <button
            className="popup__button-close"
            id={`${name}-button-close`}
            type="button"
            onClick={onClose}
          />
        </form>
      </div>
    </div>
  );
}
