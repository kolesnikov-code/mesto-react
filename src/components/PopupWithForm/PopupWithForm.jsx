export default function PopupWithForm(props) {
  return (
    <div className="popup" id="popup-edit-user-info">
      <div className="popup__container" id="popup-container-edit-user-info">
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
    </div>
  );
}
