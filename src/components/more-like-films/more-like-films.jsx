import FilmCardItem from "@components/film-list/components/film-card-item";

export default class MoreLikeFilms extends React.Component {
  render() {
    console.log('Пропсы в фильме', this.props.films)
    const filmList = this.props.films.slice(0, 4);
    return (
      <div className="catalog__movies-list">
        {filmList.map((film, index) => {
          return <FilmCardItem key={film.id} data={film} index={index} />;
        })}
      </div>
    );
  }
}

MoreLikeFilms.propTypes = {
  films: propTypes.array.isRequired
};
