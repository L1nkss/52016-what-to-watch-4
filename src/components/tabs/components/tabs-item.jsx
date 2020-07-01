const TabsItem = (props) => {
  const {active, tab, cb} = props;
  let clazzNames = `movie-nav__item`;
  if (active === tab) {
    clazzNames += ` movie-nav__item--active`;
  }
  return (
    <li className={clazzNames} key={tab} onClick={() => cb(tab)}>
      <a href="#" className="movie-nav__link">{tab}</a>
    </li>
  );
};

TabsItem.propType = {
  active: propTypes.string.isRequired,
  tab: propTypes.string.isRequired,
  cb: propTypes.func.isRequired
};

export default TabsItem;

