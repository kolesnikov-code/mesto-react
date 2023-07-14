export default function PopupWithForm({ name, title, buttonText, children }) {
  return (
    <div className={`popup popup_type_${name}`} id={`popup-type-${name}`}>
      <div className="popup__container" id={`popup-container-${name}`}>
        <form className="form" id={name} name={name} noValidate="">
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="form__button-save" id={`${name}-button-save`} type="submit">
            {buttonText || 'Сохранить'}
          </button>
          <button className="popup__button-close" id={`${name}-button-close`} type="button" />
        </form>
      </div>
    </div>
  );
}

{
  /* <div className={`popup popup_type_${props.name}`} id="popup-type-edit-user-info-form">
  <div className="popup__container" id="popup-container-edit-user-info-form">
    <form className="form" id="edit-user-info-form" name="edit-user-info-form" noValidate="">
      <h2 className="form__title">{props.title}</h2>
      <button className="form__button-save" id="form-edit-user-info-button-save" type="submit">
        {props.buttonText}
      </button>
      <button
        className="popup__button-close"
        id="form-edit-user-info-button-close"
        type="button"
      />
    </form>
  </div>
</div> */
}
