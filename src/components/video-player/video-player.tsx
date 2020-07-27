import * as React from "react";

interface IVideoPlayer {
  isActive: boolean,
  src: string,
  poster: string,
  handleProgress: (player: HTMLVideoElement) => void,
  isFullScreen: boolean,
  videoRef: React.RefObject<HTMLVideoElement>,
  setupRef: (src: string) => void
}

export default class VideoPlayer extends React.PureComponent<IVideoPlayer> {
  // private _videoRef: React.RefObject<HTMLVideoElement>;
  public video: HTMLVideoElement | null;
  constructor(props) {
    super(props);
    // this._videoRef = React.createRef();
    // this.video = null;
  }

  componentDidMount(): void {
    this.props.setupRef(this.props.src);
    // this.video = this._videoRef.current;
    // this.video = this..current;
    // this.video.src = this.props.src;
    // this._videoRef.current.addEventListener(`timeupdate`, () => this.props.handleProgress(this._videoRef.current))
  }

  // componentDidUpdate(): void {
  //   const {isActive} = this.props;
  //   console.log(document.fullscreenElement)
  //   if (this.props.isFullScreen && !document.fullscreenElement) {
  //     console.log('request')
  //     this.video.requestFullscreen();
  //   }
  //
  //   if (isActive) {
  //     this.video.play()
  //   } else if (!isActive && !this.video.paused) {
  //     this.video.pause()
  //   } else {
  //     this.video.load()
  //   }
  // }
  render() {
    return (
      <video
        muted
        className="player__video"
        // ref={this._videoRef}
        ref={this.props.videoRef}
        poster={this.props.poster} />
    );
  }
}
