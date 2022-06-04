import sprite from '../../images/sprite/sprites.svg';

const Quote = ({ title, quotes, icon }) => {
  return (
    <>
      <h2>{title}</h2>
      {quotes.map(({ id, text }) => (
        <li key={id}>
          <svg width="4" height="8">
            <use href={`${sprite}#${icon}`}></use>
          </svg>
          {text}
        </li>
      ))}
    </>
  );
};

export default Quote;
