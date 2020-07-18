import VideoPlayer from '../../components/video-player/video-player';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActivePlayer: false
      };
      this._debounce = null;

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseEnter() {
      if (this._debounce) {
        return;
      }
      this._debounce = setTimeout(() => {
        // this.setState({isActivePlayer: true});
        this.setState(() => ({isActivePlayer: true}));
      }, 1000);
    }
    handleMouseLeave() {
      if (this._debounce) {
        clearTimeout(this._debounce);
        this._debounce = null;
      }
      // this.setState({isActivePlayer: false});
      this.setState(() => ({isActivePlayer: false}));
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
          renderPlayer={(src, poster) => {
            return (
              <VideoPlayer src={src} poster={poster} isActive={this.state.isActivePlayer}/>
            );
          }}
        />
      );
    }
  }
  return WithVideoPlayer;
};

export default withVideoPlayer;
