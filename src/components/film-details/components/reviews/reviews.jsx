export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.props.getReviews();
  }
  renderReview(reviews) {
    return reviews.map((review) => {
      return (
        <div className="review" key={review.id}>
          <blockquote className="review__quote">
            <p className="review__text">{review.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{review.user.name}</cite>
              <time className="review__date" dateTime="2016-12-24">{review.date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.rating}</div>
        </div>
      );
    });
  }
  render() {
    if (this.props.loading || this.props.reviews === null) {
      return <div className="loader" />;
    }
    const halfReviews = this.props.reviews.splice(0, this.props.reviews.length / 2);
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {this.renderReview(this.props.reviews)}
        </div>
        <div className="movie-card__reviews-col">
          {this.renderReview(halfReviews)}
        </div>
      </div>
    );
  }
}

Reviews.propTypes = {
  loading: propTypes.bool.isRequired,
  reviews: propTypes.array.isRequired,
  getReviews: propTypes.func.isRequired
};
