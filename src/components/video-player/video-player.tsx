import * as React from "react";

interface IVideoPlayer {
  isActive: boolean,
  src: string,
  poster: string,
  handleProgress: (player: HTMLVideoElement) => void,
  isFullScreen: boolean
}

export default class VideoPlayer extends React.PureComponent<IVideoPlayer> {
  private _videoRef: React.RefObject<HTMLVideoElement>;
  public video: HTMLVideoElement | null;
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.video = null;
  }

  componentDidMount(): void {
    this.video = this._videoRef.current;
    this.video.src = this.props.src;
    this._videoRef.current.addEventListener(`timeupdate`, () => this.props.handleProgress(this._videoRef.current))
  }

  componentDidUpdate(): void {
    const {isActive} = this.props;

    if (this.props.isFullScreen) {
      this.video.requestFullscreen();
    }

    if (isActive) {
      this.video.play()
    } else if (!isActive && !this.video.paused) {
      this.video.pause()
    } else {
      this.video.load()
    }
  }
  render() {
    return (
      <video
        muted
        className="player__video"
        ref={this._videoRef}
        poster={this.props.poster} />
    );
  }
}
