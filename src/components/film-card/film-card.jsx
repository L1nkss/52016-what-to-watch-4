import {Link} from "react-router-dom";
import {RoutePathes} from "../../utils/constans";

const FilmCard = (props) => {
  const {renderPlayer, handleMouseEnter, handleMouseLeave} = props;
  const {name, previewImage, previewVideoLink} = props.filmInfo;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="small-movie-card__image" >
        {renderPlayer(previewVideoLink, previewImage)}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${RoutePathes.FILM_DETAIL}/${props.filmInfo.id}`} className="small-movie-card__link" >{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmInfo: propTypes.shape({
    previewVideoLink: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    previewImage: propTypes.string.isRequired,
    id: propTypes.number.isRequired
  }).isRequired,
  handleMouseEnter: propTypes.func.isRequired,
  handleMouseLeave: propTypes.func.isRequired,
  renderPlayer: propTypes.func.isRequired
};

export default FilmCard;
