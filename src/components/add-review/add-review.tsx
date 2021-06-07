import Header from "@components/header/header.connect";
import {Loading} from "@components/loading/loading";
import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";
import {starsCount} from "@components/add-review/constants/constants";
// Импорт нужен, так как React.Fragment при тесте ругается
import React from "react";

type TAddReview = {
  id: number,
  backgroundImage: string,
  name: string,
  posterImage: string
}

interface IAddReview {
  isError: boolean,
  isValid?: boolean,
  isLoading: boolean,
  onSubmit: (id: number, data: FormData) => void,
  details: TAddReview,
  handleFormChange: (value: number) => void
}


export default class AddReview extends React.PureComponent<IAddReview> {
  private textRef: React.RefObject<HTMLTextAreaElement>;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textRef = React.createRef();
  }

  componentDidMount(): void {
    this.props.handleFormChange(this.textRef.current.value.length);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);
    this.props.onSubmit(this.props.details.id, data);
  }

  renderRatingStars() {
    const ratingStarts = [];
    for (let i = 1; i <= starsCount; i++) {
      const input = (
        <React.Fragment key={`star-${i}`}>
          <input
            className="rating__input"
            id={`star-${i}`}
            type="radio"
            name="rating"
            value={i}
            defaultChecked={i === 3}
            disabled={this.props.isLoading}
          />
          <label className="rating__label" htmlFor={`star-${i}`}>{`Rating ${i}`}</label>
        </React.Fragment>
      );
      ratingStarts.push(input);
    }
    return ratingStarts;
  }

  render() {
    if (!this.props.details) {
      return <Loading />;
    }
    let formClasses = `add-review__form`;
    if (this.props.isLoading) {
      formClasses += ` add-review__form--disabled`;
    }
    const {posterImage, name, backgroundImage, id} = this.props.details;
    const {isLoading} = this.props;
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
          <form action="#" className={formClasses} onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {this.renderRatingStars()}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                minLength={50}
                maxLength={400}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                ref={this.textRef}
                placeholder="Review text"
                disabled={isLoading}
                onChange={(evt) => this.props.handleFormChange(evt.target.value.length)}
              />
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={isLoading || this.props.isValid}>{isLoading ? `Отправляем данные` : `Post`}
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
