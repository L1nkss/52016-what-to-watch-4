import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";
import * as React from "react";

const FilmCard = (props) => {
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
