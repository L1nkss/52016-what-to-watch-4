import * as React from "react";

interface IVideoPlayer {
  src: string,
  poster: string,
  videoRef: React.RefObject<HTMLVideoElement> | React.RefObject<any>,
  setupRef: (src: string) => void
}

export default class VideoPlayer extends React.PureComponent<IVideoPlayer> {

  componentDidMount(): void {
    this.props.setupRef(this.props.src);
  }

  render() {
    return (
      <video
        muted
        className="player__video"
        ref={this.props.videoRef}
        poster={this.props.poster} />
    );
  }
}
