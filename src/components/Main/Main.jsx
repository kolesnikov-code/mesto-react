import { useEffect, useState } from 'react';
import api from '../../utils/Api.js';
import Card from '../Card/Card.jsx';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([dataUserInfo, dataCards]) => {
        setUserName(dataUserInfo.name);
        setUserDescription(dataUserInfo.about);
        setUserAvatar(dataUserInfo.avatar);
        dataCards.forEach(element => (element.myId = dataUserInfo._id));
        setCards(dataCards);
      })
      .catch(error => console.error(`Произошла ошибка при загрузке данных ${error}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit-button" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          <p className="profile__about-self">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} />
      </section>
      <ul className="elements">
        {cards.map(data => {
          return (
            // вынести обёртку, присвоить KEY и внутри продолжить какие-то действия
            // проще, чем через деструктуризпацию
            <li className="element__container" key={data._id}>
              <Card card={data} onCardClick={onCardClick} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
