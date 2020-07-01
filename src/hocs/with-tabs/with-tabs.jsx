const withTabs = (Component, Tabs) => {
  class WithTabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: Tabs.activeTab,
        tabs: Tabs.items
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
          handleTabClick={this.handleTabClick}
          activeTab={this.state.activeTab}
          tabs={this.state.tabs}
        />
      );
    }
  }
  return WithTabs;
};

export default withTabs;
