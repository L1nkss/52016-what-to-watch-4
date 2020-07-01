const CatalogItem = (props) => {
  const {active, cb, name} = props;
  let clazzName = `catalog__genres-item`;
  if (active === name) {
    clazzName += ` catalog__genres-item--active`;
  }
  return (
    <li onClick={(evt) => cb(evt, name)} className={clazzName}>
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
};

CatalogItem.propTypes = {
  active: propTypes.string,
  cb: propTypes.func,
  name: propTypes.string
};

export default CatalogItem;
