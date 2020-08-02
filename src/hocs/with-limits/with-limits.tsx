import {FILM_LIMIT} from "../../constants/constants";
import {TFilm} from "../../constants/types";

interface IWithLimitsState {
  visible: number
}

interface IWithLimitsProps {
  films: Array<TFilm>
}

const withLimits = (Component, limit) => {
  class WithLimits extends React.Component<IWithLimitsProps, IWithLimitsState> {
    limit: number;
    constructor(props) {
      super(props);
      this.limit = FILM_LIMIT;
      this.state = {
        visible: limit
      };
      this.changeVisible = this.changeVisible.bind(this);
    }
    changeVisible(films) {
      if (this.state.visible + this.limit > films.length) {
        this.setState(() => {
          return {
            visible: films.length
          };
        });
        return;
      }
      this.setState(() => {
        return {
          visible: this.state.visible + this.limit
        };
      });
    }
    render() {
      return (
        <Component {...this.props} changeVisible={this.changeVisible} visible={this.state.visible} />
      );
    }
  }
  return WithLimits;
};

export default withLimits;
