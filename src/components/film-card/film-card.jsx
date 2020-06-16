const FilmCard = (props) => {
  const {name, image, onHoverCardHandler} = props;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onHoverCardHandler()}>
      <div className="small-movie-card__image">
        <img src={`img/${image}.jpg`} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  onHoverCardHandler: propTypes.func
};

export default FilmCard;
