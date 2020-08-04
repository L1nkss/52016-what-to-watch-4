const MIN_VALUE = 50;
const MAX_VALUE = 400;

interface IWithFormValidation {
  isError: boolean
}

const withFormValidation = (Component) => {
  return class WithFormValidation extends React.PureComponent<{}, IWithFormValidation> {
    constructor(props) {
      super(props);
      this.state = {
        isError: false
      };
      this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(value) {
      if (value < MIN_VALUE || value > MAX_VALUE) {
        this.setState(() => ({isError: true}));
        return;
      }
      this.setState(() => ({isError: false}));
    }

    render() {
      return (
        <Component {...this.props} isValid={this.state.isError} handleFormChange={this.handleFormChange} />
      );
    }
  };
};

export default withFormValidation;
