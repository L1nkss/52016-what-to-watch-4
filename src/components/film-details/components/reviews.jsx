const renderReview = (reviews) => {
  return reviews.map((review) => {
    return (
      <div className="review" key={review.author}>
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>

          <footer className="review__details">
            <cite className="review__author">{review.author}</cite>
            <time className="review__date" dateTime="2015-11-18">{review.date}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{review.rating}</div>
      </div>
    );
  });
};


const Reviews = (props) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReview(props.data)}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  data: propTypes.arrayOf(propTypes.object)
};

export default Reviews;
