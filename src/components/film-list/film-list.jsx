import FilmCard from "../film-card/film-card";

export default class FilmList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: 0
    };
    this.renderCards = this.renderCards.bind(this);
    this.onHoverCardHandler = this.onHoverCardHandler.bind(this);
  }
  // Функция обработчик для показа активной карточки фильма(при наведении)
  onHoverCardHandler(name) {
    this.setState(() => {
      return {
        activeFilm: name
      };
    });
  }
  renderCards(data, index) {
    const {name, image} = data;
    const keyIndex = `${index}-${name}`;
    return <FilmCard
      key={keyIndex}
      name={name}
      image={image}
      onHoverCardHandler={this.onHoverCardHandler}/>;
  }
  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map(this.renderCards)}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    image: propTypes.string
  }))
};
