const FilmCard = (props) => {
  const {onClickCardHandler, renderPlayer, handleMouseEnter, handleMouseLeave} = props;
  const {name, preview_image, preview_video_link} = props.filmInfo;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="small-movie-card__image" onClick={onClickCardHandler}>
        {renderPlayer(preview_video_link, preview_image)}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onClickCardHandler}>{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmInfo: propTypes.shape({
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    preview: propTypes.string.isRequired
  }).isRequired,
  handleMouseEnter: propTypes.func.isRequired,
  handleMouseLeave: propTypes.func.isRequired,
  onClickCardHandler: propTypes.func.isRequired,
  renderPlayer: propTypes.func.isRequired
};

export default FilmCard;
