import Header from "@components/header/header.connect";
import {Loading} from "@components/loading/loading";
import {Link} from "react-router-dom";
import {RoutePathes} from "../../utils/constans";


export default class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // this.formRef.current.
  }

  onSubmit(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);
    this.props.onSubmit(this.props.details.id, data);
  }
  render() {
    let formClasses = `add-review__form`;
    if (this.props.details === undefined) {
      return <Loading />;
    }
    if (this.props.isLoading) {
      formClasses += ` add-review__form--disabled`;
    }
    console.log(this.props);
    const {posterImage, name, backgroundImage, id} = this.props.details;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${RoutePathes.FILM_DETAIL}/${id}`} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className={formClasses} onSubmit={this.onSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input
                  className="rating__input"
                  id="star-1"
                  type="radio"
                  name="rating"
                  value="1"
                  disabled={this.props.isLoading}
                />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input
                  className="rating__input"
                  id="star-2"
                  type="radio"
                  name="rating"
                  value="2"
                  disabled={this.props.isLoading}
                />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input
                  className="rating__input"
                  id="star-3"
                  type="radio"
                  name="rating"
                  value="3"
                  checked
                  disabled={this.props.isLoading}
                />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input
                  className="rating__input"
                  id="star-4"
                  type="radio"
                  name="rating"
                  value="4"
                  disabled={this.props.isLoading}
                />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input
                  className="rating__input"
                  id="star-5"
                  type="radio"
                  name="rating"
                  value="5"
                  disabled={this.props.isLoading}
                />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                minLength={50}
                maxLength={400}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                disabled={this.props.isLoading}
              />
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={this.props.isLoading}>{this.props.isLoading ? `Отправляем данные` : `Post`}
                </button>
              </div>
            </div>
          </form>
        </div>
        {this.props.isError && <div className="notification notification--error">При отправке данных произошла ошибка. Попробуйте ещё раз</div>}
      </section>
    );
  }
}
