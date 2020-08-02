import VideoPlayer from '@components/video-player/video-player';
import {TFilm} from "../../constants/types";
import {runVideoFullScreen} from "@utils/utils";

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
  return class WithVideoPlayer extends React.PureComponent<IProps, IState> {
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

    componentWillUnmount() {
      clearTimeout(this._debounce);
      if (this.video) {
        this.video.removeEventListener(`timeupdate`, this.handleProgress);
      }
    }

    setupRef(src): void {
      this.video = this.videoRef.current;
      this.video.src = src;
      this.video.addEventListener(`timeupdate`, this.handleProgress);
    }

    handleMouseEnter() {
      if (this._debounce) {
        return;
      }
      this._debounce = setTimeout(() => {
        this.video.play();
      }, 1000);
    }

    changePlayerStatus() {
      if (this.state.isActivePlayer) {
        this.video.play();
      } else if (!this.state.isActivePlayer && !this.video.paused) {
        this.video.pause();
      } else {
        this.video.load();
      }
    }

    handleClick() {
      this.setState((state) => ({isActivePlayer: !state.isActivePlayer}), this.changePlayerStatus);
    }

    handleFullScreenClick() {
      if (!document.fullscreenElement) {
        runVideoFullScreen(this.video);
      } else {
        document.exitFullscreen();
      }
    }

    handleProgress() {
      const percent = Number(((this.video.currentTime / this.video.duration) * 100).toFixed(2));
      const timeLeft = Number((this.video.duration - this.video.currentTime).toFixed(2));
      this.setState(() => ({progress: percent, timeLeft}));
    }

    handleMouseLeave() {
      if (this._debounce) {
        clearTimeout(this._debounce);
        this._debounce = null;
      }
      this.video.load();
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
                setupRef={this.setupRef}
                videoRef={this.videoRef}/>
            );
          }}
        />
      );
    }
  };
};

export default withVideoPlayer;
