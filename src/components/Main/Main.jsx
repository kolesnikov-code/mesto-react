export default function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit-button" onClick={onEditAvatar}>
          <img className="profile__avatar" src="#" alt="Аватар профиля" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name" />
          <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          <p className="profile__about-self" />
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} />
      </section>
      <section className="elements"></section>
    </main>
  );
}
