const withActiveItem = (Compoment, className) => {
  class WithActiveItem extends React.Component {
    getClass() {
      const {active, name} = this.props;
      let clazzNames = className;
      if (active === name) {
        clazzNames += ` ${className}--active`;
      }
      return clazzNames;
    }
    render() {
      const itemClass = this.getClass();
      return (
        <Compoment {...this.props} className={itemClass}/>
      );
    }
  }
  return WithActiveItem;
};

withActiveItem.propTypes = {
  Component: propTypes.shape({
    active: propTypes.string.isRequired,
    name: propTypes.string.isRequired
  }),
  className: propTypes.string.isRequired
};

export default withActiveItem;
