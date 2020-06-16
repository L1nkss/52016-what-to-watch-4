import FilmCard from "@components/film-card/film-card";

export default class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: 0
    };
    this.renderCards = this.renderCards.bind(this);
  }
  // Функция обработчик для показа активной карточки фильма(при наведении)
  onHoverCardHandler(cardIndex) {
    this.setState(() => {
      return {
        activeFilm: cardIndex
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
      onHoverCardHandler={() => this.onHoverCardHandler(keyIndex)}/>;
  }
  render() {
    return (
      this.props.films.map(this.renderCards)
    );
  }
}

FilmsList.propTypes = {
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    image: propTypes.string
  }))
};
