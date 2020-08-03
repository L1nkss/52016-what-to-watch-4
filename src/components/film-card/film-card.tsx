import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";
import {TFilm} from "../../constants/types";

interface IFilmCard {
  filmInfo: TFilm,
  renderPlayer: (previewVideo: string, previewImage: string) => React.ReactNode,
  handleMouseEnter: () => void,
  handleMouseLeave: () => void
}

const FilmCard = (props: IFilmCard) => {
  const {renderPlayer, handleMouseEnter, handleMouseLeave} = props;
  const {name, previewImage, previewVideoLink} = props.filmInfo;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Link to={`${RoutePathes.FILM_DETAIL}/${props.filmInfo.id}`} className="c-inherit">
        <div className="small-movie-card__image" >
          {renderPlayer(previewVideoLink, previewImage)}
        </div>
        <h3 className="small-movie-card__title">{name}</h3>
      </Link>
    </article>
  );
};

export default FilmCard;
