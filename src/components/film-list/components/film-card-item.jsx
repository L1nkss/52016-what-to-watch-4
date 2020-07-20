import FilmCard from "@components/film-card/film-card";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";

const FilmCardItem = (props) => {
  const {data} = props;
  const FilmCardWrapper = withVideoPlayer(FilmCard);
  return <FilmCardWrapper
    filmInfo={data}
  />;
};

FilmCardItem.propTypes = {
  data: propTypes.object
};

export default FilmCardItem;
