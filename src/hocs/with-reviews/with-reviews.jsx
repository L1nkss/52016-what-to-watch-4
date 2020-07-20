const withReviews = (Component) => {
  class WithReviews extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviews: null
      };
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  return WithReviews;
};

export default withReviews;
