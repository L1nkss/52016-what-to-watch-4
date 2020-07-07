import FilmCardItem from "./components/film-card-item";

class FilmList extends React.PureComponent {
  render() {
    const {films, visible, changeVisible} = this.props;
    const filmList = films.slice(0, visible);
    return (
      <>
        <div className="catalog__movies-list">
          {filmList.map((film, index) => {
            return <FilmCardItem key={film.name + index} data={film} index={index} changePath={this.props.changePath} />;
          })}
        </div>
        {films.length > visible && (
          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={() => changeVisible(films)}
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
  changePath: propTypes.func.isRequired,
  changeVisible: propTypes.func.isRequired,
  visible: propTypes.number.isRequired
};
