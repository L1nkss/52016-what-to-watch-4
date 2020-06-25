const renderTexts = (texts) => {
  return texts.map((text) => {
    return <p key={text}>{text}</p>;
  });
};

const Overview = (props) => {
  const {score, rating, director, starring, texts} = props.data;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{rating} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {renderTexts(texts)}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {
  data: propTypes.shape({
    rating: propTypes.number,
    score: propTypes.number,
    director: propTypes.string,
    starring: propTypes.string,
    texts: propTypes.arrayOf(propTypes.string)
  }),
}

export default Overview;
