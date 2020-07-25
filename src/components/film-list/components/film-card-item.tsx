import FilmCard from "@components/film-card/film-card";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import * as React from "react";
import {TFilm} from "../../../constants/types";

interface IFilmCardItem {
  data: TFilm
}

const FilmCardItem = (props: IFilmCardItem) => {
  const {data} = props;
  const FilmCardWrapper = withVideoPlayer(FilmCard);
  return <FilmCardWrapper
    filmInfo={data}
  />;
};

export default FilmCardItem;
