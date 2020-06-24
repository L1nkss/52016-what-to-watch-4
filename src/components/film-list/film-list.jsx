import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

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
    const {name} = data;
    const keyIndex = `${index}-${name}`;
    const FilmCardWrapper = withVideoPlayer(FilmCard);
    return <FilmCardWrapper
      key={keyIndex}
      filmInfo={data}
      onHoverCardHandler={this.onHoverCardHandler}
      onClickCardHandler={this.props.changePath}/>;
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
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  }).isRequired),
  changePath: propTypes.func.isRequired
};
