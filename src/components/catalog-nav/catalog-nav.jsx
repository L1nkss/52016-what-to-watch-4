import {connect} from 'react-redux';
import {ActionCreate} from "../../reducer";
import propTypes from 'prop-types';

const catalogList = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

const renderCatalogList = (active, cb) => {
  return catalogList.map((element) => {
    let clazzName = `catalog__genres-item`;
    if (active === element) {
      clazzName += ` catalog__genres-item--active`;
    }
    return (
      <li className={clazzName} key={element} onClick={(evt) => cb(evt, element)}>
        <a href="#" className="catalog__genres-link">{element}</a>
      </li>
    );
  });
};

const CatalogNav = (props) => {
  const {genre, onGenreClick} = props;
  return (
    <ul className="catalog__genres-list">
      {renderCatalogList(genre, onGenreClick)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(evt, type) {
    evt.preventDefault();
    dispatch(ActionCreate.changeFilter(type));
  }
});

const CatalogGenres = connect(mapStateToProps, mapDispatchToProps)(CatalogNav);

CatalogNav.propTypes = {
  genre: propTypes.string.isRequired,
  onGenreClick: propTypes.func.isRequired
};

export {CatalogGenres};
