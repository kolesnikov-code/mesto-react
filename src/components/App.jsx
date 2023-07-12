import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import PopupWithForm from './PopupWithForm/PopupWithForm.jsx';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="edit-user-info" title="Редактировать профиль" buttonText="Сохранить" />

      <div className="popup" id="popup-edit-user-avatar">
        <div
          className="popup__container popup__container-edit-user-avatar"
          id="popup-container-edit-user-avatar"
        >
          <form
            className="form"
            id="edit-user-avatar-form"
            name="edit-user-avatar-form"
            noValidate=""
          >
            <h2 className="form__title">Обновить аватар</h2>
            <input
              className="form__input"
              id="form-input-value-avatar-link"
              name="avatarlink"
              type="url"
              placeholder="Ссылка на новый аватар"
              required=""
            />
            <span className="form-input-value-avatar-link-error form__error" />
            <button
              className="form__button-save"
              id="form-edit-user-avatar-button-save"
              type="submit"
            >
              Сохранить
            </button>
            <button
              className="popup__button-close"
              id="form-edit-user-avatar-button-close"
              type="button"
            />
          </form>
        </div>
      </div>
      <div className="popup" id="popup-edit-user-info">
        <div className="popup__container" id="popup-container-edit-user-info">
          <form className="form" id="edit-user-info-form" name="edit-user-info-form" noValidate="">
            <h2 className="form__title">Редактировать профиль</h2>
            <input
              className="form__input"
              id="form-input-value-username"
              name="username"
              type="text"
              minLength={2}
              maxLength={40}
              placeholder="Ваше имя"
              required=""
            />
            <span className="form-input-value-username-error form__error" />
            <input
              className="form__input"
              id="form-input-value-about-self"
              name="aboutself"
              type="text"
              minLength={2}
              maxLength={200}
              placeholder="Напишите о себе"
              required=""
            />
            <span className="form-input-value-about-self-error form__error" />
            <button
              className="form__button-save"
              id="form-edit-user-info-button-save"
              type="submit"
            >
              Сохранить
            </button>
            <button
              className="popup__button-close"
              id="form-edit-user-info-button-close"
              type="button"
            />
          </form>
        </div>
      </div>
      <div className="popup" id="popup-add-new-item">
        <div className="popup__container" id="popup-container-add-new-item">
          <form className="form" name="add-new-item-form" noValidate="">
            <h2 className="form__title">Новое место</h2>
            <input
              className="form__input"
              id="form-input-value-item-title"
              name="title"
              type="text"
              minLength={2}
              maxLength={30}
              placeholder="Название"
              required=""
            />
            <span className="form-input-value-item-title-error form__error" />
            <input
              className="form__input"
              id="form-input-value-item-link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="form-input-value-item-link-error form__error" />
            <button className="form__button-save" id="form-add-new-item-button-save" type="submit">
              Создать
            </button>
            <button
              className="popup__button-close"
              id="form-add-new-item-button-close"
              type="button"
            />
          </form>
        </div>
      </div>
      <div className="popup" id="popup-delete-item">
        <div
          className="popup__container popup__container-delete-item"
          id="popup-container-delete-item"
        >
          <form className="form" name="delete-item-form" noValidate="">
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__button-save" id="form-delete-item-button-save" type="submit">
              Да
            </button>
            <button
              className="popup__button-close"
              id="form-delete-item-button-close"
              type="button"
            />
          </form>
        </div>
      </div>
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
    </>
  );
}

export default App;
