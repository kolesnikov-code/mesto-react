import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import PopupWithForm from './PopupWithForm/PopupWithForm.jsx';
import ImagePopup from './ImagePopup/ImagePopup.jsx';
import { useState } from 'react';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // function handleDeleteCardClick() {} //
  // function handleOpenCardClick() {} //

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-user-avatar-form"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
      >
        <input
          className="form__input"
          id="form-input-value-avatar-link"
          name="avatarlink"
          type="url"
          placeholder="Ссылка на новый аватар"
          required=""
        />
        <span className="form-input-value-avatar-link-error form__error" />
      </PopupWithForm>

      <PopupWithForm
        name="edit-user-info-form"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="add-new-item-form"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
      >
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
      </PopupWithForm>

      <PopupWithForm name="delete-item-form" title="Вы уверены?" buttonText="Да" />

      <ImagePopup />
    </>
  );
}

export default App;
