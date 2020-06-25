const renderTabs = (tabs, cb, active) => {
  return tabs.map((name) => {
    let classNames = `movie-nav__item`;
    if (active === name) {
      classNames += ` movie-nav__item--active`;
    }
    return (
      <li className={classNames} key={name} onClick={() => cb(name)}>
        <a href="#" className="movie-nav__link">{name}</a>
      </li>
    );
  });
};

const Tabs = (props) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {renderTabs(props.tabs, props.handleTabClick, props.activeTab)}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  tabs: propTypes.shape({
    name: propTypes.string.isRequired,
    isActive: propTypes.bool.isRequired
  }),
  handleTabClick: propTypes.func.isRequired,
  activeTab: propTypes.string.isRequired
};

export default Tabs;
