const renderStarrings = (starrings) => {
  return starrings.join(`, \n`);
};

const Details = (props) => {
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">Wes Andreson</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {renderStarrings(props.data.starring)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{props.data.runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{props.data.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{props.data.released}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  data: propTypes.shape({
    runTime: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    released: propTypes.number.isRequired,
    starring: propTypes.arrayOf(propTypes.string).isRequired
  }).isRequired
};

export default Details;
