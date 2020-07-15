const Overview = (props) => {
  const {rating, director, starring, description, scoresCount} = props.data;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{scoresCount}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{rating} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(` `)}</strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {
  data: propTypes.shape({
    rating: propTypes.number,
    director: propTypes.string,
    starring: propTypes.array,
    description: propTypes.string
  }),
};

export default Overview;
