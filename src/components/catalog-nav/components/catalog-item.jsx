const CatalogItem = (props) => {
  const {cb, name} = props;
  return (
    <li onClick={(evt) => cb(evt, name)} className={props.className}>
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
};

CatalogItem.propTypes = {
  className: propTypes.string,
  cb: propTypes.func,
  name: propTypes.string
};

export default CatalogItem;
