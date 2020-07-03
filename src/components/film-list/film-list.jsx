import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

class FilmList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.limit = 8;
    this.state = {
      visible: 8,
    };
    this.renderCards = this.renderCards.bind(this);
  }

  handleButtonClick() {
    if (this.state.visible + this.limit > this.props.films.length) {
      this.setState(() => {
        return {
          visible: this.props.films.length
        };
      });
      return;
    }
    this.setState(() => {
      return {
        visible: this.state.visible + this.limit
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
      onClickCardHandler={this.props.changePath}/>;
  }
  render() {
    const films = this.props.films.slice(0, this.state.visible);
    return (
      <>
        <div className="catalog__movies-list">
          {films.map(this.renderCards)}
        </div>
        {this.props.films.length > this.state.visible && (
          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={() => this.handleButtonClick()}
            >
              Show more
            </button>
          </div>
        )}
      </>
    );
  }
}

export {FilmList};

FilmList.propTypes = {
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  }).isRequired),
  changePath: propTypes.func.isRequired
};
