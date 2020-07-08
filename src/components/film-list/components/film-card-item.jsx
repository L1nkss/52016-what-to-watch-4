import FilmCard from "@components/film-card/film-card";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";

const FilmCardItem = (props) => {
  const {data, changePath} = props;
  const FilmCardWrapper = withVideoPlayer(FilmCard);
  return <FilmCardWrapper
    filmInfo={data}
    onClickCardHandler={changePath}/>;
};

FilmCardItem.propTypes = {
  data: propTypes.object,
  changePath: propTypes.func.isRequired
};

export default FilmCardItem;
