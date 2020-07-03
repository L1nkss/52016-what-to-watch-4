import {CatalogList} from "../../utils/constans";
import CatalogItem from "./components/catalog-item";

const CatalogNav = (props) => {
  const {genre, onGenreClick} = props;
  return (
    <ul className="catalog__genres-list">
      {CatalogList.map((element) => {
        return <CatalogItem key={element} active={genre} cb={onGenreClick} name={element} />;
      })}
    </ul>
  );
};
export {CatalogNav};

CatalogNav.propTypes = {
  genre: propTypes.string.isRequired,
  onGenreClick: propTypes.func.isRequired
};
