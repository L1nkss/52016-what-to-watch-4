interface IWithTabsState {
  activeTab: string,
  tabs: Array<string>
}

const withTabs = (Component, tabs) => {
  class WithTabs extends React.Component<{}, IWithTabsState> {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: tabs.ACTIVE_TAB,
        tabs: tabs.ITEMS
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
