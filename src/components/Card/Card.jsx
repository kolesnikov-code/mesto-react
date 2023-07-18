export default function Card({ card, onCardClick }) {
  return (
    <article className="element">
      <img
        className="element__image"
        // по умолчанию можно поставить заглушки : ="#"
        // но без них всё работает
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick({ link: card.link, name: card.name })}
      />
      <h2 className="element__title">{card.name}</h2>
      <button className="element__delete-button" type="button" />
      <div className="element__like-container">
        <button className="element__like-button" type="button" />
        <p className="element__like-counter" />
      </div>
    </article>
  );
}
