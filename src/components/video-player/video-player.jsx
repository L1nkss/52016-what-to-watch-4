export default class VideoPlayer extends React.PureComponent {
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

VideoPlayer.propTypes = {
  poster: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
  src: propTypes.string.isRequired
};
