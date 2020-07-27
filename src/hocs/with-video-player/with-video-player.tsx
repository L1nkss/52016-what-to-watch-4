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
    public videoRef: React.RefObject<HTMLVideoElement>;
    public video: HTMLVideoElement | null;
    constructor(props) {
      super(props);
      this.state = {
        isActivePlayer: false,
        progress: 0,
        timeLeft: 0,
        isFullScreen: false
      };
      this.videoRef = React.createRef();
      this.video = null;
      this._debounce = null;

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleProgress = this.handleProgress.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
      this.setupRef = this.setupRef.bind(this);
    }

    // componentDidMount(): void {
    //   this.video = this.videoRef.current;
    //   this.video = this.props.src;
    // }
    setupRef(src): void {
      this.video = this.videoRef.current;
      this.video.src = src;
      this.video.addEventListener(`timeupdate`, this.handleProgress);
    }

    componentDidUpdate(): void {
      // console.log(document.fullscreenElement)
      // if (this.props.isFullScreen && !document.fullscreenElement) {
      //   console.log('request')
      //   this.video.requestFullscreen();
      // }
      // console.log(this.video.paused);

      // if (this.state.isActivePlayer) {
      //   this.video.play()
      // } else if (!this.state.isActivePlayer && !this.video.paused) {
      //   this.video.pause()
      // } else {
      //   this.video.load()
      // }
    }

    handleMouseEnter() {
      if (this._debounce) {
        return;
      }
      this._debounce = setTimeout(() => {
        // this.setState({isActivePlayer: true}, this.changePlayerStatus);
        this.video.play();
      }, 1000);
    }

    changePlayerStatus() {
      if (this.state.isActivePlayer) {
        this.video.play()
      } else if (!this.state.isActivePlayer && !this.video.paused) {
        this.video.pause()
      } else {
        console.log('tyt')
        this.video.load()
      }
    }

    handleClick() {
      this.setState((state) => ({isActivePlayer: !state.isActivePlayer}), this.changePlayerStatus)
    }

    handleFullScreenClick() {
      if (!document.fullscreenElement) {
        this.video.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      // if (!document.fullscreenElement) {
      //   console.log('s')
      //   this.setState((state) => ({isFullScreen: true}));
      //   return;
      //   // player.requestFullscreen()
      // }
      // console.log('tyt')
      // this.setState((state) => ({isFullScreen: false}));
      // // console.log(document.fullscreenElement)
      // // // return document.fullscreenElement

    }

    handleProgress() {
      const percent = Number(((this.video.currentTime / this.video.duration) * 100).toFixed(2));
      const timeLeft = Number((this.video.duration - this.video.currentTime).toFixed(2));
      this.setState(() => ({progress: percent, timeLeft}))
    }

    handleMouseLeave() {
      if (this._debounce) {
        clearTimeout(this._debounce);
        this._debounce = null;
      }
      // this.setState({isActivePlayer: false}, this.changePlayerStatus);
      this.video.load()
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
              <VideoPlayer
                src={src}
                poster={poster}
                isFullScreen={this.state.isFullScreen}
                setupRef={this.setupRef}
                isActive={this.state.isActivePlayer}
                handleProgress={this.handleProgress}
                videoRef={this.videoRef}/>
            );
          }}
        />
      );
    }
  }
  return WithVideoPlayer;
};

export default withVideoPlayer;
