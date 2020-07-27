import VideoPlayer from '@components/video-player/video-player';
import * as React from "react";
import {TFilm} from "../../constants/types";

interface IState {
  isActivePlayer: boolean,
  progress: number,
  timeLeft: number,
  isFullScreen: boolean
}

interface IProps {
  filmInfo: TFilm
}


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent<IProps, IState> {
    _debounce: NodeJS.Timeout;
    constructor(props) {
      super(props);
      this.state = {
        isActivePlayer: false,
        progress: 0,
        timeLeft: 0,
        isFullScreen: false
      };
      this._debounce = null;

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleProgress = this.handleProgress.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    }
    handleMouseEnter() {
      if (this._debounce) {
        return;
      }
      this._debounce = setTimeout(() => {
        this.setState({isActivePlayer: true});
      }, 1000);
    }

    handleClick() {
      this.setState((state) => ({isActivePlayer: !state.isActivePlayer}))
    }

    handleFullScreenClick() {
      this.setState((state) => ({isFullScreen: !state.isFullScreen}))
    }

    handleProgress(player) {
      const percent = Number(((player.currentTime / player.duration) * 100).toFixed(2));
      const timeLeft = Number((player.duration - player.currentTime).toFixed(2));
      this.setState(() => ({progress: percent, timeLeft}))
    }

    handleMouseLeave() {
      if (this._debounce) {
        clearTimeout(this._debounce);
        this._debounce = null;
      }
      this.setState({isActivePlayer: false});
    }

    componentWillUnmount() {
      clearTimeout(this._debounce);
    }

    render() {
      return (
        <Component
          {...this.props}
          isActivePlayer={this.state.isActivePlayer}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
          handleClick={this.handleClick}
          progress={this.state.progress}
          timeLeft={this.state.timeLeft}
          handleFullScreenClick={this.handleFullScreenClick}
          renderPlayer={(src, poster) => {
            return (
              <VideoPlayer src={src} poster={poster} isFullScreen={this.state.isFullScreen} isActive={this.state.isActivePlayer} handleProgress={this.handleProgress}/>
            );
          }}
        />
      );
    }
  }
  return WithVideoPlayer;
};

export default withVideoPlayer;
