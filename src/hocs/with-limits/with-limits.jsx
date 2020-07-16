import {filmLimit} from "../../utils/constans";

const withLimits = (Component, limit) => {
  class WithLimits extends React.Component {
    constructor(props) {
      super(props);
      this.limit = filmLimit;
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
