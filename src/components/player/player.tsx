import * as React from "react";
import history from "@utils/history";
import {TFilm} from "../../constants/types";
import {Loading} from "@components/loading/loading";

const getDuration = (time: number) => {
  if (time === 0) {
    return `00:00:00`;
  }
  const minutes = Math.floor(time / 60);
  const seconds = Number(time - minutes * 60).toFixed(0);
  return `${minutes}:${seconds}`;
};


interface IPlayer {
  film: TFilm,
  renderPlayer: (src: string, image: string) => void,
  handleClick: () => void,
  isActivePlayer: boolean,
  progress: number,
  timeLeft: number,
  handleFullScreenClick: () => void
}

const Player = (props: IPlayer) => {
  if (!props.film) {
    return <Loading/>;
  }
  const playerIcon = props.isActivePlayer ?
    <svg viewBox="0 0 14 21" width="14" height="21">
      <use xlinkHref="#pause"></use>
    </svg> :
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>;

  return (
    <div className="player">
      {props.renderPlayer(props.film.videoLink, props.film.previewImage)}

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={props.progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${props.progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getDuration(props.timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => props.handleClick()}>
            {playerIcon}
            <span>{props.isActivePlayer ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{props.film.name}</div>

          <button type="button" className="player__full-screen" onClick={props.handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
