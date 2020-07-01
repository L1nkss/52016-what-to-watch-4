import TabsItem from "./components/tabs-item";

const Tabs = (props) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {props.tabs.map((tab) => {
          return <TabsItem key={tab} tab={tab} active={props.activeTab} cb={props.handleTabClick} />;
        })}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.string).isRequired,
  handleTabClick: propTypes.func.isRequired,
  activeTab: propTypes.string.isRequired
};

export default Tabs;
