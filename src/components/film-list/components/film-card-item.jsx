import FilmCard from "@components/film-card/film-card";
import withVideoPlayer from "../../../hocs/with-video-player/with-video-player";

const FilmCardItem = (props) => {
  const {data, index, changePath} = props;
  const {name} = data;
  const keyIndex = `${index}-${name}`;
  const FilmCardWrapper = withVideoPlayer(FilmCard);
  return <FilmCardWrapper
    key={keyIndex}
    filmInfo={data}
    onClickCardHandler={changePath}/>;
};

FilmCardItem.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  }).isRequired),
  index: propTypes.number.isRequired,
  changePath: propTypes.func.isRequired
};

export default FilmCardItem;
