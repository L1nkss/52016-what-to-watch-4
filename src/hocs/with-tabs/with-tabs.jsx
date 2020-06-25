const withTabs = (Component) => {
  class WithTabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: `Overview`,
        tabs: [`Overview`, `Details`, `Reviews`]
      };
      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(name) {
      this.setState(() => {
        return {
          activeTab: name
        };
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          handleTabClick={this.handleTabClick}
          tabs={this.state.tabs}/>
      );
    }
  }
  return WithTabs;
};

export default withTabs;
