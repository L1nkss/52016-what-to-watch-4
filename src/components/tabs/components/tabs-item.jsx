const TabsItem = (props) => {
  const {name, cb} = props;
  return (
    <li className={props.className} key={name} onClick={() => cb(name)}>
      <a href="#" className="movie-nav__link">{name}</a>
    </li>
  );
};

TabsItem.propTypes = {
  className: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  cb: propTypes.func.isRequired
};

export default TabsItem;

