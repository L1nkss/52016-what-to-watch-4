const renderTabs = (tabs) => {
  return tabs.map((tab) => {
    const {name, isActive} = tab;
    let classNames = `movie-nav__item`;
    if (isActive) {
      classNames += ` movie-nav__item--active`;
    }
    return (
      <li className={classNames} key={name}>
        <a href="#" className="movie-nav__link">{name}</a>
      </li>
    );
  });
};

const Tabs = (props) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {renderTabs(props.tabs)}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  tabs: propTypes.shape({
    name: propTypes.string,
    isActive: propTypes.bool
  })
}

export default Tabs;
