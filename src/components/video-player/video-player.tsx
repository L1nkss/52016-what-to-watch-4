import * as React from "react";

interface IVideoPlayer {
  isActive: boolean,
  src: string,
  poster: string
}

export default class VideoPlayer extends React.PureComponent<IVideoPlayer> {
  private _videoRef: React.RefObject<HTMLVideoElement>;
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {isActive} = this.props;
    const video = this._videoRef.current;
    video.src = this.props.src;

    if (isActive) {
      video.play();
    } else {
      video.load();
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
