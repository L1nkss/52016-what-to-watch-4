import CatalogItem from "./components/catalog-item";
import withActiveItem from "@hocs/with-active-item/with-active-item";

import * as React from "react";

const CatalogNav = (props) => {
  const {genre, onGenreClick} = props;
  return (
    <ul className="catalog__genres-list">
      {props.allGenres.map((element) => {
        const CatalogItemWrapper = withActiveItem(CatalogItem, `catalog__genres-item`);
        return <CatalogItemWrapper key={element} active={genre} cb={onGenreClick} name={element} />;
      })}
    </ul>
  );
};
export {CatalogNav};
