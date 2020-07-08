const withActiveItem = (Compoment, className) => {
  class WithActiveItem extends React.Component {
    getClass() {
      const {active, name} = this.props;
      let itemClass = className;
      if (active === name) {
        itemClass += ` ${className}--active`;
      }
      return itemClass;
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
