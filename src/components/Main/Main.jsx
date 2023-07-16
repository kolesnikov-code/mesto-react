export default function Main({ onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit-button">
          <img className="profile__avatar" src="#" alt="Аватар профиля" onClick={onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name" />
          <button className="profile__edit-button" type="button" />
          <p className="profile__about-self" />
        </div>
        <button className="profile__add-button" type="button" />
      </section>
      <section className="elements"></section>
    </main>
  );
}
